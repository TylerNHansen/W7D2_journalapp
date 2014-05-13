Journalapp::Application.routes.draw do

  resources :posts, only: [:index]

  namespace "api", defaults: {format: :json} do
    resources :posts, only: [:create, :index]
  end

end
