class Api::V1::ItemsController < ApplicationController
    def index
		@items = Item.all.order(created_at: :desc)
		render json: @items
		# respond_to do |f|
		# 	f.html {render :index}
		# 	f.json {render json: @items}
		# end
    end

	def create
		# binding.pry
		# item = Item.new(item_params)
		item = Household.last.items.build(item_params)
		if item.save
			render json: item
		else
			render json: {errors: item.errors.full_messages}
		end
		# binding.pry
	end

	private

	def item_params
    	params.require(:item).permit(:name, :description, :current_location, :proper_location)
	end
end
