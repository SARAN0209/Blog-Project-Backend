const { Router } = require("express");
const express = require("express");
const router = express.Router();
const Blog = require("../Modules/blog");

router.post("/create", Blog.createBlog);
router.get("/get", Blog.getBlog);
router.put("/update/:id", Blog.updateBlog);
router.delete("/delete/:id", Blog.deleteBlog);
router.get("/:id", Blog.particularBlog);
router.get("/userBlog/:id", Blog.getBlogByUser);

module.exports = router;
