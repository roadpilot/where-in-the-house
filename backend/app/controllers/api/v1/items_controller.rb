class Api::V1::ItemsController < ApplicationController
    def index
		@items = Item.all.order(created_at: :asc)
		render json: @items
    end

	def create
		# binding.pry
		@item = Item.new(item_params.except(:location))
		@item.save
		if item_params[:location].strip != ""
			@item.locations.find_or_create_by(name: item_params[:location])
		end 
		if @item.save
			render json: @item, status: :accepted
		else
			render json: { errors: @item.errors.full_messages }, status: :unprocessible_entity
		end
		# binding.pry
	end

	def update
		# binding.pry
		@item = Item.find(params[:id])
		@item.update(item_params.except(:location))
		if item_params[:location].strip != ""
			@item.locations.find_or_create_by(name: item_params[:location])
		end 
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
