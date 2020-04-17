class CreateLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :locations do |t|
    	t.string :placename
    	t.string :coordinates
    	t.string :country
    	t.string :city
    	t.string :image
        t.integer :climbs_total
    	t.timestamps
    end
  end
end
