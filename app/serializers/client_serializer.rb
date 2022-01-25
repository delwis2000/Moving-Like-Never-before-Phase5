class ClientSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :cell, :password_digest
end
