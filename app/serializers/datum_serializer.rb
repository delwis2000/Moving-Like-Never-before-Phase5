class DatumSerializer < ActiveModel::Serializer
  attributes :id, :startLocation, :endingLocation, :price, :note
end
