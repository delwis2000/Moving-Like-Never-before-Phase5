class Client < ApplicationRecord
    has_secure_password
    has_many :data
    has_many :movers, through: :data 

    validates :email, presence: true 
    validates :name, presence: true 
    validates :cell, presence: true 

end
