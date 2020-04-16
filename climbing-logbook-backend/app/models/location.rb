class Location < ApplicationRecord
	has_many :routes
	validates :placename, presence: true
end
