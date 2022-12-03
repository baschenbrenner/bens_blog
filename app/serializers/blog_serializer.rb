class BlogSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :picture_url, :document_url

  def picture_url
    rails_blob_path(object.picture, only_path:true) if object.picture.attached?
  end

  def document_url
    rails_blob_path(object.document, only_path:true) if object.document.attached?
  end
end
