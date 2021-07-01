class Apartment < ApplicationRecord
    belongs_to :user
    validates :street, :city, :state, :manager, :manager_email, :price, :bedrooms, :bathrooms, :pets, presence: true
end
