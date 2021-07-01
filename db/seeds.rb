user = User.create email: "ee@gmail.com", password: "123456", password_confirmation: "123456"
apartments =[
  {
    user_id: user.id,
    street: "202 Park Blvd",
    city: "San Diego",
    state: "CA",
    manager: "Senora Lolitas",
    manager_email: "lolitas@gmail.com",
    price: "$1,800/month",
    pets: "Yes",
    bedrooms: 1,
    bathrooms: 1
  },
  {
    user_id: user.id,
    street: "420 Robinson Ave Unit F",
    city: "San Diego",
    state: "CA",
    manager: "Senor Roberto",
    manager_email: "roberto@gmail.com",
    price: "$2,200/month",
    pets: "Yes",
    bedrooms: 2,
    bathrooms: 1
  },
  {
    user_id: user.id,
    street: "645 B St",
    city: "San Diego",
    state: "CA",
    manager: "Senorita TS",
    manager_email: "ts@gmail.com",
    price: "$3,200/month",
    pets: "No",
    bedrooms: 3,
    bathrooms: 2.5
  }
]
apartments.each do |attributes|
  Apartment.create attributes
  puts "creating apartment #{attributes}"
end
