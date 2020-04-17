class Api::ItemsController < ApplicationController
  before_action :set_item, only: [:show]
  def index
    render json: Item.orderDescending()
  end

  def show
    render json: @item
  end

  def create
    item = Item.new(item_params)
    puts item
    file = params[:file]

    if file
      begin
        ext = File.extname(file.tempfile)
        cloud_image = Cloudinary::Uploader.upload(file)
        item.image = cloud_image['secure_url']
      rescue => e
        render json: { errors: e }, status: 422
      end

    else
      item.image = "https://picsum.photos/100"
    end
      

    if item.save
      render json: item
    else
      render json: {errors:item.errors}, status: :unproccessable_entity
    end
  end

  private
    def set_item
      @item = Item.find(params[:id])
    end
    
    def item_params
      params.require(:item).permit(:name, :image, :description, :likes, :file)
    end
end
