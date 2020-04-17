class ChangeDefaultValuesToRoutes < ActiveRecord::Migration[6.0]
  def change
  	change_column_default :routes, :times_climbed, 2
  end
end
