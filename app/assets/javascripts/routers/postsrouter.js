Journalapp.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$root = options.rootEl;
  },

  routes : {
    "":                 "index",    // #index
    "posts/:id":        "showpost", // #show a single post
    "posts/:id/edit":   "editpost"
  },

  index: function() {
    // alert('i am the index')
    Journalapp.Collections.posts.fetch(); // fetch is async
    var postsIndex = new Journalapp.Views.PostsIndex({
      collection: Journalapp.Collections.posts
    });

    $('#postsIndex').html(postsIndex.render().$el);
    //fetch the collection
    //create the view passing the collection as an arg
    //render the view, set the html of the $root to the $el of the view
  },

  showpost: function(id) {
    // alert('I am the show')
    var post = Journalapp.Collections.posts.getOrFetch(parseInt(id));
    // Journalapp.Models.Post.fetch()
    // post.fetch()
    var showPost = new Journalapp.Views.PostShow({model: post});
    this.$root.html(showPost.render().$el);
  },

  editpost: function(id) {
    var post = Journalapp.Collections.posts.getOrFetch(parseInt(id));
    var editPost = new Journalapp.Views.EditPostView({model: post})
    this.$root.html(editPost.render().$el);
  }
});