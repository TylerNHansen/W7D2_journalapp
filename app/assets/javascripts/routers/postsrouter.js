Journalapp.Routers.PostsRouter = Backbone.Router.extend({

  routes : {
    "":                 "index",    // #index
    "posts/:id":        "showpost", // #show a single post
  },
})