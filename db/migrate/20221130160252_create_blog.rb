class CreateBlog < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.date :date
      t.snippet :text
      

      t.timestamps
    end
  end
end
