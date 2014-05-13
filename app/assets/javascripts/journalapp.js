window.Journalapp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    var posts = new Journalapp.Collections.Posts();
    posts.fetch(); // fetch is async
    var postsIndex = new Journalapp.Views.PostsIndex({collection: posts});
    $('#postsIndex').html(postsIndex.$el);

  }
};

$(document).ready(function(){
  Journalapp.initialize();
});
