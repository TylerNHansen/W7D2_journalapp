Journalapp::Application.routes.draw do
  root to: 'posts#index'
  # resources :posts, only: [:index]

  namespace "api", defaults: {format: :json} do
    resources :posts, only: [:create, :index]
  end

end
