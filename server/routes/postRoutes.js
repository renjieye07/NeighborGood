const mongoose = require("mongoose");
//const requireNeighborhood = require('../middleware/requireNeighborhood');
const auth = require("../middleware/auth");
const Post = mongoose.model("Post");

module.exports = app => {
  app.post("/api/posts", auth, async (req, res) => {
    const { title, post_type, description, event_date, event_place } = req.body;

    if (post_type == "event") {
      const post = new Post({
        title,
        post_type,
        description,
        event_date,
        event_place,
        owner: req.user.id,
        post_date: Date.now()
      });
      try {
        await post.save();
        console.log(req.post);
      } catch (err) {
        res.status(422).send(err);
      }
    } else if (
      post_type == "info" ||
      post_type == "help" ||
      post_type == "donation"
    ) {
      const post = new Post({
        title,
        post_type,
        description,
        owner: req.user.id,
        post_date: Date.now()
      });
      try {
        await post.save();
      } catch (err) {
        res.status(422).send(err);
      }
    }
  });
  app.get("/api/myPosts", async (req, res) => {
    const allPost = await Post.find({
      owner: req.user.id
    });
    console.log(allPost);
    done(null, allPost);
  });
};
