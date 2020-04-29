class Location < ApplicationRecord
	has_many :routes
	validates :placename, presence: true

	include ActiveModel::Dirty
  	# define_attribute_methods :location

  	def initial_seed_climb_total(id)
  		@location = Location.find(id)
  		@location.routes.each do |map|
  			@location.climbs_total += map.times_climbed
  		end
  		self.climbs_total = route.times_climbed
		self.save
  	end
		# singlelocation = Location.find(1)
		# singlelocation.routes.each do |route|
		# singlelocation.climbs_total += route.times_climbed
		# end

	def update_climb_total(route)
		# on creation of a route, get all routes from that location and re-tally values
		self.climbs_total = self.climbs_total + route.times_climbed
		self.save
		puts "was climbed and now times_climbed #{route.times_climbed_was} #{route.times_climbed}"
		# if route.location_id == self.id
		# 	 self.climbs_total = self.climbs_total + route.times_climbed + 50
			 # TODO WORK on the formula here. what if someone adds some random number. or make this field unchangeable after
			 # self.save
			# end
	end


def update_climb_total_old_route(route)
	# TODO FIGURE OUT THE LOGIC OF ACTIVEMODEL DIRTY AND DEFINE_ATTR_METHODS
	# on update of a route, get old route total, subtract from self.climbs_total, add new field value
	# define attribute methods needs location.route.times_climbed something like that
	puts route.times_climbed_was
	puts route.times_climbed
	if route.location_id == self.id
		self.climbs_total = self.climbs_total - routes.times_climbed_was + route.times_climbed
		self.save
	end

	# https://api.rubyonrails.org/classes/ActiveModel/Dirty.html
	# https://stackoverflow.com/questions/607069/using-activerecord-is-there-a-way-to-get-the-old-values-of-a-record-during-afte

end






end
