# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# u1 = User.create(
# username: Faker::Internet.username,
# password: "pw" 
# )
# puts "Created user: #{u1.username}"

# u2 = User.create(
# username: Faker::Internet.username,
# password: "pw" 
# )
# puts "Created user: #{u2.username}"

# Household.destroy_all
# h1 = Household.create()
# puts "Created household_id: #{h1.id}"

# HouseholdUser.destroy_all
# HouseholdUser.create(user_id: u1.id, household_id: h1.id)
# HouseholdUser.create(user_id: u2.id, household_id: h1.id)

Item.destroy_all
Location.destroy_all
# Item.create(household_id: h1.id, name: "sunglasses", description: "brown with camo temples", current_location: "closet shelf", proper_location: "")
# Item.create(household_id: h1.id, name: "", description: "it's blue and looks like a can opener", current_location: "kitchen utensil drawer", proper_location: "")
# Item.create(household_id: h1.id, name: "glass canning jar", description: "", current_location: "basement storage room shelf", proper_location: "")
# Item.create(household_id: h1.id, name: "flat head screw driver", description: "", current_location: "", proper_location: "tool box")
a = Item.create(name: "sunglasses", description: "brown with camo temples", current_location: "closet shelf", proper_location: "")
a.locations.build(name: "hall closet")
a.save
a = Item.create(name: "", description: "it's blue and looks like a can opener", current_location: "kitchen utensil drawer", proper_location: "")
a.locations.build(name: "kitchen utensil drawer")
a.save
a = Item.create(name: "glass canning car", description: "", current_location: "basement storage room shelf", proper_location: "")
a.locations.build(name: "basement shelf")
a.save
a = Item.create(name: "flat head screw driver", description: "", current_location: "", proper_location: "tool box")
a.locations.build(name: "workbench")
a.save

