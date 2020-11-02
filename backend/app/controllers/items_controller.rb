class ItemsController < ApplicationController
    def index
		@items = Item.all
		respond_to do |f|
			f.html {render :index}
			f.json {render json: @items}
		end
    end
end
