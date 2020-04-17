class Location < ApplicationRecord
	has_many :routes
	validates :placename, presence: true

	include ActiveModel::Dirty
  	define_attribute_methods :location


	def update_climb_total(route)
		# on creation of a route, get all routes from that location and re-tally values
		if route.location_id == self.id
			 self.climbs_total = self.climbs_total + route.times_climbed
			 # TODO WORK on the formula here. what if someone adds some random number. or make this field unchangeable after
			 self.save
			end
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
