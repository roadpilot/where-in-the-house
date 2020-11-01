class HouseholdsController < ApplicationController
    def index
		@households = Household.all
		respond_to do |f|
			f.html {render :index}
			f.json {render json: @households}
		end
    end
end
