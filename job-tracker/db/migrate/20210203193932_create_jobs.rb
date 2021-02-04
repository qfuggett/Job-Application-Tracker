class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.string :title
      t.string :company
      t.boolean :applied
      t.boolean :interview
      t.boolean :hired

      t.timestamps
    end
  end
end
