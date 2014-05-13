Journalapp.Views.PostShow = Backbone.View.extend ({
  initialize: function(options){

  },
  template: JST['postshow'],
  render: function () {
    var showPost = this.template({ post: this.collection });
    this.$el.html(showPost);
    return this;
  },
});
