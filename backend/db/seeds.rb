# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
u1 = User.create(
username: Faker::Internet.username,
password: "pw" 
)
puts "Created user: #{u1.username}"

u2 = User.create(
username: Faker::Internet.username,
password: "pw" 
)
puts "Created user: #{u2.username}"

Household.destroy_all
h1 = Household.create()
puts "Created household_id: #{h1.id}"

HouseholdUser.destroy_all
HouseholdUser.create(user_id: u1.id, household_id: h1.id)
HouseholdUser.create(user_id: u2.id, household_id: h1.id)
