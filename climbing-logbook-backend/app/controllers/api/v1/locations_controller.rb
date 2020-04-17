class Api::V1::LocationsController < ApplicationController
	def index
		@locations = Location.all
		render json: @locations
	end

	def create
		@location = Location.new(location_params)
		if @location.save
			render json: @location
		else
			render json: {error: 'Error creating location'}
		end
	end

	def show
		@location = Location.find(params[:id])
		render json: @location
		# /api/vi/locations/1

	end

	def destroy
		@location = Location.find(params[:id])
		@location.destroy
	end

	private

	def location_params
		params.require(:location).permit(:placename, :coordinates, :country, :city, :image, :climbs_total)
	end

end
