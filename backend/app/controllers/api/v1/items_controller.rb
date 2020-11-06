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
		item = Item.new(item_params)
		# item = Household.last.items.build(item_params)
		if item.save
			render json: item
		else
			render json: {errors: item.errors.full_messages}
		end
		# binding.pry
	end

	def update
		binding.pry
		@item = Item.find(params[:id])
		@item.update(item_params)
		if @item.save
			render json: @item, status: :accepted
		else
			render json: { errors: @item.errors.full_messages }, status: :unprocessible_entity
		end
	end

	private

	def item_params
    	params.permit(:name, :description, :location)
	end
end
