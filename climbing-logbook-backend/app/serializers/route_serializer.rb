class RouteSerializer < ActiveModel::Serializer
  attributes :id, :location_id, :name, :grade, :climbing_type, :notes, :climb_date, :image, :url, :times_climbed
end
