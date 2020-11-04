class Api::V1::ItemsController < ApplicationController
    def index
		@items = Item.all
		render json: @items
		# respond_to do |f|
		# 	f.html {render :index}
		# 	f.json {render json: @items}
		# end
    end

	def create
		binding.pry
	end

	private

	def item_params
    	params.require(:item).permit(:name, :description, :current_location, :proper_location)
	end
end
