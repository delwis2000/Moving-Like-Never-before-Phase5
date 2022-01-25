class Datum < ApplicationRecord

    belongs_to :client
    belongs_to :mover

    validates :description, presence: true 
    validates :name, presence: true 
    validates :rate, presence: true 
    validates :cell, presence: true 

end
