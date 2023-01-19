const express = require("express");
const router = express.Router();
const { addPage, main } = require("../views");
const { Page } = require("../models");

function generateSlug(title) {
  return title.replace(/\s+/g, "_").replace(/\W/g, "");
}

router.get("/", async (req, res, next) => {
  try {
    let wait = await Page.findAll();
    console.log(wait);
    res.send(main(wait));
  } catch (e) {
    console.log(e, "1");
  }
});

router.post("/", async (req, res, next) => {
  try {
    const page = await Page.create({
      title: req.body.title,
      slug: generateSlug(req.body.title),
      content: req.body.content,
    });
    res.redirect(`/wiki/${page.slug}`);
  } catch (e) {
    console.log(e, "2");
  }
});

router.get("/add", (req, res, next) => {
  try {
    res.send(addPage());
  } catch (e) {
    console.log(e, "3");
  }
});

router.get("/:slug", async (req, res, next) => {
  try {
    const page = await Page.findOne({
      where: {
        slug: req.params.slug,
      },
    });
    res.json(page);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
