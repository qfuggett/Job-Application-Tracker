class RemoveAppliedInterviewHiredFromJobs < ActiveRecord::Migration[6.0]
  def change
    remove_column :jobs, :applied, :string
    remove_column :jobs, :interview, :string
    remove_column :jobs, :hired, :string
  end
end
