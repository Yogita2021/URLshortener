const express = require("express");
const { ShortUrlModel } = require("../model/url.model.js");
const { generateShortUrl } = require("../middleware/shortmid.js");
const urlRouter = express.Router();
const { auth } = require("../middleware/auth.js");

// route for shortening of url

urlRouter.post("/shorten", auth, async (req, res) => {
  try {
    const { originalUrl } = req.body;

    const existingUrl = await ShortUrlModel.findOne({ originalUrl });

    if (existingUrl) {
      return res.status(200).json({
        msg: "url already shotend",
        isError: false,
        original: originalUrl,
        shorten: existingUrl.ShortenUrl,
      });
    }

    let ShortenUrl;
    // we are generating shorturl
    while (true) {
      ShortenUrl = generateShortUrl(originalUrl);

      const duplicate = await ShortUrlModel.findOne({ ShortenUrl });
      if (!duplicate) {
        break;
      }
    }
    // creating new Url
    const url = new ShortUrlModel({ originalUrl, ShortenUrl });

    await url.save();

    res.status(200).send({
      msg: "Url shorten successfully",
      isError: false,
      original: originalUrl,
      shorten: ShortenUrl,
    });
  } catch (error) {
    // console.log(error.message);

    res.status(500).json({ msg: error.message });
  }
});

//route for redircting to the original url
urlRouter.get("/:shortId", async (req, res) => {
  try {
    const { shortId } = req.params;

    const url = await ShortUrlModel.findOneAndUpdate(
      { ShortenUrl: shortId },
      { $push: { visithistory: { timestamp: Date.now() } } }
    );

    if (url) {
      res.redirect(url.originalUrl);
    } else {
      res.status(404).json({ msg: "Url not found" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = { urlRouter };
