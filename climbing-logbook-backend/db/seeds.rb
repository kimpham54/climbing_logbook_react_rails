# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

location1 = Location.create(placename: "red rock canyon", coordinates: "howe gelb", country: "United States", city: "Las Vegas", image:'https://i.imgur.com/nzCYmDD.jpg' )
location2 = Location.create(placename: "flatirons", coordinates: "howe gelb", country: "United States", city: "Boulder", image:'https://i.imgur.com/Cmqt0F8.jpg' )
location3 = Location.create(placename: "yosemite valley", coordinates: "howe gelb", country: "United States", city: "Yosemite National Park", image:'https://www.nps.gov/yose/planyourvisit/images/climber-on-el-cap-main-page-web.jpg' )
location4 = Location.create(placename: "indian creek", coordinates: "howe gelb", country: "United States", city: "Moab", image:'https://i.imgur.com/uP5zAVx.jpg' )

Route.create([
{ location_id: 1, 
	name:'crimson chrysalis', 
	grade: 5.8, 
	climbing_type: 'trad', 
	notes: 'good climb would do again',
	climb_date: '2020-01-02',
	image: 'https://i.imgur.com/TOjW2Qd.jpg',
	url:'https://www.mountainproject.com/route/105732281/crimson-chrysalis' },

{ location_id: 1, 
	name:'olive oil', 
	grade: 5.8, 
	climbing_type: 'trad', 
	notes: 'good climb would do again',
	climb_date: '2020-01-02',
	image: 'https://i.imgur.com/xKaotuZ.jpg',
	url:'https://www.mountainproject.com/route/105732494/olive-oil' },

{ location_id: 1, 
	name:'birdland', 
	grade: 5.8, 
	climbing_type: 'trad', 
	notes: 'good climb would do again',
	climb_date: '2020-01-02',
	image: 'https://i.imgur.com/fHeRS0f.jpg',
	url:'https://www.mountainproject.com/route/105733115/birdland' },

{ location_id: 2, 
	name:'first flatiron', 
	grade: 5.6, 
	climbing_type: 'trad', 
	notes: 'good climb would do again',
	climb_date: '2020-01-02',
	image: 'https://i.imgur.com/WJzT0xv.jpg',
	url:'https://www.mountainproject.com/route/105748268/direct-route' },


{ location_id: 3, 
	name:'central pillar of frenzy', 
	grade: 5.8, 
	climbing_type: 'trad', 
	notes: 'good climb would do again',
	climb_date: '2020-01-02',
	image: 'https://i.imgur.com/aFLuRme.jpg',
	url:'https://www.mountainproject.com/route/105862930/central-pillar-of-frenzy' },


{ location_id: 4, 
	name:'gorilla', 
	grade: 5.8, 
	climbing_type: 'trad', 
	notes: 'good climb would do again',
	climb_date: '2020-01-02',
	image: 'https://i.imgur.com/EC2REP1.jpg',
	url:'https://www.mountainproject.com/route/105717424/gorilla' },

])






