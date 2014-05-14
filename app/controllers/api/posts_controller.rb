class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)

    if @post.save
      render json: @post
    else
      render(
        json: @post.errors.full_messages,
        status: :unprocessible_entity
      )
    end
  end

  def show
    render json: Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(post_params)
      render json: @post
    else
      render(
        json: @post.errors.full_messages,
        status: :unprocessible_entity
      )
    end
  end


  def index
    @posts = Post.all

    render json: @posts

  end

  private

  def post_params
    params.require(:post).permit(:body, :title)
  end
end
