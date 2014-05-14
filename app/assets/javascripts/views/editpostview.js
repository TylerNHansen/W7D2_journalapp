Journalapp.Views.EditPostView = Backbone.View.extend ({
  initialize: function(options){
    this.listenTo(
      this.model,
      "add remove change:title reset",
      this.render
    );
  },
  template: JST['post_form'],
  events: {
    "submit .post-form": "handleSubmit"
  },
  handleSubmit: function(event){
    debugger;
    event.preventDefault();
    var form = this.template({post: this.model});
    var formParams = $(form).serializeJSON();
    this.model.save(formParams, {});
  },

  render: function(){
    var that = this
    var form = this.template({post: this.model});
    this.$el.html(form);

    return this;
  }



});