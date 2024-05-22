class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users, id: :uuid do |t|
      t.string :userName
      t.string :userIcon
      t.timestamps
    end
  end
end
