class MoverSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :cell, :rate, :description
end
