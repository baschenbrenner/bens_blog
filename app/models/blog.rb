class Blog < ApplicationRecord
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  
    has_one_attached :picture
    has_one_attached :document
  end