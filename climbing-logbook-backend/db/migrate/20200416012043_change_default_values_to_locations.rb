class ChangeDefaultValuesToLocations < ActiveRecord::Migration[6.0]
  def change
  	change_column_default :locations, :climbs_total, 0
  end
end
