module.exports = {
  routes: [
    {
      method: "GET",
      path: "/blog-bookmarks/user/blog-bookmarks",
      handler: "blog-bookmark.userBookmarks",
    },
    {
      method: "GET",
      path: "/blog-bookmarks/is-bookmarked/:id",
      handler: "blog-bookmark.isBookmarkedByUser",
    },
  ],
};
