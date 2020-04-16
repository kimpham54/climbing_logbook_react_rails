class Route < ApplicationRecord
	belongs_to :location
	validates :name, presence: true
	validates_inclusion_of :climbing_type, :in => ['trad', 'sport', 'mixed']
	
end
