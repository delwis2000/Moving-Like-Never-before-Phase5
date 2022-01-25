class CreateMovers < ActiveRecord::Migration[6.1]
  def change
    create_table :movers do |t|
      t.string :name
      t.string :email
      t.string :cell
      t.string :rate
      t.string :description

      t.timestamps
    end
  end
end
