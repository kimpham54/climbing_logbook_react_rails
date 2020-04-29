class Api::V1::RoutesController < ApplicationController
	# before_action :set_location

	def index
		if params[:location_id]
			@routes = Location.find(params[:location_id]).routes
			render json: @routes
		else
			@routes = Route.all
			render json: @routes
		end
	end

	def create
		@route = Route.new(route_params)
		# @route = @location.routes.new(route_params)
		if @route.save
		@location = Location.find(params[:location_id])
		@location.update_climb_total(@route)
			render json: @route
		else
			render json: {error: 'Error creating route'}
		end
	end

	def show
		@route = Route.find(params[:id])
		# @route = @location.routes.find_by(id: params[:id])
		render json: @route
		# /api/vi/routes/1
	end

	def destroy
		@route = Route.find(params[:id])
		@route.destroy
	end


	def update
      @route = Route.find(params[:id])
      @route.update(route_params)
      @route.save
      render json: @route
    end

	# def set_location
	# 	@location = Location.find(params[:location_id])
	# end

	private

	def route_params
		params.require(:route).permit(:location_id, :name, :grade, :climbing_type, :notes, :climb_date, :image, :url, :times_climbed)
	end

end