class BlogSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :title, :picture_url

  def picture_url
    rails_blob_path(object.picture, only_path:true) if object.picture.attached?
  end
end
