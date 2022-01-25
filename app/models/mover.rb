class Mover < ApplicationRecord

    has_many :data
    has_many :clients, through: :data

    # validates :startLocation, presence: true 
    #validates :price, presence: true 
    #validates :note, presence: true 
end
