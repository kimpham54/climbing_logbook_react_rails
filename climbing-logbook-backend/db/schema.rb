# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_04_16_012043) do

  create_table "locations", force: :cascade do |t|
    t.string "placename"
    t.string "coordinates"
    t.string "country"
    t.string "city"
    t.string "image"
    t.integer "climbs_total", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "routes", force: :cascade do |t|
    t.string "location_id"
    t.string "name"
    t.float "grade"
    t.string "climbing_type"
    t.string "notes"
    t.datetime "climb_date"
    t.string "image"
    t.string "url"
    t.integer "times_climbed", default: 2
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
