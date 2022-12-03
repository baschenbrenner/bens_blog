class Blog < ApplicationRecord
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  
    has_one_attached :picture
    has_one_attached :document


    validate :correct_document_mime_type

    private

    def correct_document_mime_type
      if document.attached? && !document.content_type.in?(%w(application/msword application/pdf))
        document.purge # delete the uploaded file
        errors.add(:document, 'Must be a PDF or a DOC file')
      end
    end
  end