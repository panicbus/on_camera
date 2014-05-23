# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

locations = [ ['Camera 1', 'Pasadena downtown', -118.15211176872253, 34.14567708986222],
							['Camera 2', 'Convention Center', -118.23827505111693, 34.04916593685887],
							['Camera 3', 'Chinatown',  -118.23845744132996, 34.06614309903811],
							['Camera 4', 'Hollywood Boulevard', -118.34167420864105, 34.10160638993377], 

locations.each do |location|
	Location.create(name:location[0], description:location[1], lat:location[2], long:location[3])
end