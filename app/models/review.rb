class Review < ApplicationRecord
  belongs_to :user
  belongs_to :workout

  validates :comment, presence: true 
  validates :rating, presence: true, :inclusion => {:in => 0..10}
end
