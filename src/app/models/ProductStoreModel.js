"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductStoreModel extends Model {
    static associate(models) {
      ProductStoreModel.belongsTo(models.ProductModel, {
        foreignKey: "productId",
        as: "product",
      });

      ProductStoreModel.belongsTo(models.StoreModel, {
        foreignKey: "storeId",
        as: "store",
      });
    }
  }

  ProductStoreModel.init(
    {
      status: DataTypes.STRING,
      productId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      storeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    },
    {
      sequelize,
      modelName: "ProductStoreModel",
      tableName: "productStores",
    }
  );

  return ProductStoreModel;
};
