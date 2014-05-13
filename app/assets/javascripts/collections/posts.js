(function(root){
  NS = root.NS = (root.NS || {});

  var Posts = NS.Posts = Backbone.Collection.extend({
    url: '/api/posts',
    model: NS.Post
  });


})(this);