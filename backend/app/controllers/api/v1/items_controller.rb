class Api::V1::ItemsController < ApplicationController
    def index
		@items = Item.all
		render json: @items
		# respond_to do |f|
		# 	f.html {render :index}
		# 	f.json {render json: @items}
		# end
    end
end
