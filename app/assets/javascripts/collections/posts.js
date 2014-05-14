Journalapp.Collections.Posts = Backbone.Collection.extend({
  url: '/api/posts',
  model: Journalapp.Models.Post,

  getOrFetch: function (id) {
    var model;
    var posts = this;

    if (model = this.get(id)) {
      model.fetch( {url: '/api/posts/' + id} );
      return model;
    }
    else {
      model = new Journalapp.Models.Post( { id: id });
      model.fetch({
        url: '/api/posts/' + id,
        success: function () { posts.add(model) }
      });
      return model;
    }
  }
});

Journalapp.Collections.posts = new Journalapp.Collections.Posts();