module.exports = {
  routes: [
    {
      method: "DELETE",
      path: "/blog-comments/remove-by-user/:blog/:id",
      handler: "blog-comment.deleteByUser",
    },
  ],
};
