class CreateData < ActiveRecord::Migration[6.1]
  def change
    create_table :data do |t|
      t.string :startLocation
      t.string :endingLocation
      t.integer :price
      t.string :note
      t.integer :client_id
      t.integer :mover_id

      t.timestamps
    end
  end
end
