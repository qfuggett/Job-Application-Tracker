class Job < ApplicationRecord
    validates :title, :company, presence: true
end
