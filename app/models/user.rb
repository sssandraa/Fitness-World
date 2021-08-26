class User < ApplicationRecord
    has_many :reviews 
    has_many :lists 
    has_many :workouts, through: :reviews 
    has_many :workouts, through: :lists 

    validates :username, presence: true, uniqueness:true 
    has_secure_password 
    # validates :name, presence: true
    # validates :height, presence: true
    # validates :weight, presence: true 
    # validates :age, presence: true 
end
