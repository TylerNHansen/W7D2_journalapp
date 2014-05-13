window.Journalapp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var postsRouter = new Journalapp.Routers.PostsRouter({rootEl: $('#postsIndex')});
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Journalapp.initialize();
});
