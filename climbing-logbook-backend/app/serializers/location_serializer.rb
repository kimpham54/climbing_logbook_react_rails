class LocationSerializer < ActiveModel::Serializer
  attributes :id, :placename, :coordinates, :country, :city, :image, :climbs_total
  has_many :routes
end
