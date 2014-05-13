Journalapp.Collections.Posts = Backbone.Collection.extend({
  url: '/api/posts',
  model: Journalapp.Models.Post
});
