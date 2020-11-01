# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
2.times do
    a = User.create(
    username: Faker::Internet.username,
    password: "pw" 
    )
    puts "Created user: #{a.username}"
end

Household.destroy_all
a = Household.create()
puts "Created household_id: #{a.id}"