"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class OrderDetailModel extends Model {
    static associate(models) {
      OrderDetailModel.belongsTo(models.ProductModel, {
        foreignKey: "productId",
        as: "product",
      });

      OrderDetailModel.belongsTo(models.OrderModel, {
        foreignKey: "orderId",
        as: "order",
      });
    }
  }

  OrderDetailModel.init(
    {
      quantity: DataTypes.INTEGER,
      price: DataTypes.DECIMAL(18, 0),
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "OrderDetailModel",
      tableName: "orderDetails",
    }
  );
  return OrderDetailModel;
};
