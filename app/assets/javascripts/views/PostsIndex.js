(function (root) {
  var NS = root.NS = (root.NS || {});

  var PostsIndex = NS.PostsIndex = Backbone.View.extend ( {
    initialize: function(options){

      var that = this

      this.collection = options.collection;

      this.listenTo(this.collection, "remove", function(){
        that.render();
      });

      this.listenTo(this.collection, "add", function(){
        that.render();
      });

      this.listenTo(this.collection, "change:title", function(){
        that.render();
      });

      this.listenTo(this.collection, "reset", function(){
        that.render();
      });
    },

    template: JST['posts_index'],
    render: function () {
      var viewPosts = this.template({ posts: this.collection });
      this.$el.html(viewPosts);
      return this;
    },

    events: {
      "click .button.delete": "destroy"
    }
  });




})(this);