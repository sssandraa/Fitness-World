class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image
end
