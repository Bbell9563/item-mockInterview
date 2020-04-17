class Item < ApplicationRecord

  def self.orderDescending
    Item.find_by_sql(
      "SELECT * FROM items ORDER BY likes Desc"
    )
  end
end
