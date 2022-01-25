# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Client.destroy_all
# Mover.destroy_all
# Data.destroy_all

c1 = Client.create(name: "John V", email: "johnvynde@yahoo.com", cell: "4438527720", password: "Kdate12876!")

c2 = Client.create(name: "Aurion Howard", email: "howardgenesis@gmail.com", cell: "8053567743", password: "ThatladyisSmart2$")

c3 = Client.create(name: "Alex Gore", email: "Galex347t@gmail.com", cell: "2025889634", password: "Goodheart2be%")

m1 = Mover.create(name: "Yasmine Taylor", email: "Ytaykor77@yahoo.com", cell: "4045868922", rate: "$1.2/miles", description: "I am available for moving request in the West Coast Area from February to April")

m2 = Mover.create(name: "Jane Mano", email: "Mano34j@consultus.com", cell: "3056552287", rate: "$1.35/miles", description: "I am available for moving request in the East Coast Area from January  to May")

m3 = Mover.create(name: "Brendan Tyson", email: "Brendt36L@gmail.com", cell: "8779868796", rate: "$0.95/miles", description: "I am available to move request in DC, MD, and Virginia from February to May")


d1 = Datum.create(startLocation: "Baltimore,MD", endingLocation: "New-York,NY", price: 1450, note: "Bags of clothes, box, and a car", client_id:c2.id , mover_id:m3.id )

d2 = Datum.create(startLocation: "Dallas, TX", endingLocation: "Houston,TX", price: 1150, note: "Urgent, needs to be done by march 30", client_id:c1.id , mover_id:m1.id )

d3 = Datum.create(startLocation: "Riley, NC", endingLocation: "Alexandria,VA", price: 1675, note: "Bags of clothes, box, and two cars", client_id:c3.id , mover_id:m1.id )


