class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :name, :image, :height, :weight, :age, :goal
end
