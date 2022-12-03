class BlogsController < ApplicationController

    skip_before_action :verify_authenticity_token
    
    def index
      blogs = Blog.all
      render json: blogs, status: :ok
    end

    def show 
        blog = Blog.find_by(id: params[:id])
        if blog
            render json: blog, status: :ok
        else
            render json: {errors: "blog not found"}
        end
    end

    def create
        blog = Blog.create(blog_params)
        render json: blog
    end


    private

    def blog_params 
        params.permit(:title, :picture, :document)
    end

  end
  