Journalapp.Views.PostShow = Backbone.View.extend ({
  initialize: function(options){
    this.listenTo(
      this.model,
      "add remove change:title reset",
      this.render
    );
  },
  template: JST['post_show'],
  render: function () {

    var showPost = this.template({ post: this.model });
    this.$el.html(showPost);
    return this;
  },
});
