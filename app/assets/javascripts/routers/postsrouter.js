Journalapp.Routers.PostsRouter = Backbone.Router.extend({
  initialize: function(options){
    this.$root = options.rootEl;
  },

  routes : {
    "":                 "index",    // #index
    "posts/:id":        "showpost", // #show a single post
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
    var post = Journalapp.Collections.posts.get(parseInt(id));
    // Journalapp.Models.Post.fetch()
    // post.fetch()
    var showPost = new Journalapp.Views.PostShow({model: post});
    this.$root.html(showPost.render().$el);
  }

});