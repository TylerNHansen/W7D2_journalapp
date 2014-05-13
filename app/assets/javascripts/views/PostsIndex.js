Journalapp.Views.PostsIndex = Backbone.View.extend ( {
  initialize: function(options){
    this.listenTo(
      this.collection,
      "add remove change:title reset",
      this.render
    );
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
