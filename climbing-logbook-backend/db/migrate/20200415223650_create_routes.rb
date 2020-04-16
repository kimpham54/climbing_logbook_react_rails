class CreateRoutes < ActiveRecord::Migration[6.0]
  def change
    create_table :routes do |t|
    	t.string :location_id
    	t.string :name
    	t.float :grade
    	t.string :climbing_type
    	t.string :notes
    	t.datetime :climb_date
      t.string :image
      t.string :url
      t.timestamps
    end
  end
end
