class Api::V1::LocationsController < ApplicationController
    def index
		@locations = Location.all.order(:name)
		render json: @locations
    end
end