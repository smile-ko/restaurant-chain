import {
  OrderModel,
  UserModel,
  BookModel,
  StoreModel,
  TableModel,
} from "../../../models";

import { fn, col } from "sequelize";

class DashboardController {
  // [GET] /admin/dashboard
  async index(req, res) {
    try {
      const books = await BookModel.findAll({
        where: { statusBook: 0 },
        include: [
          {
            model: TableModel,
            where: {
              storeId: req.session.store.id,
            },
            as: "table",
          },
        ],
      });

      const staffs = await UserModel.findAll({
        where: { roleId: 3, status: false },
        include: [
          {
            model: StoreModel,
            as: "stores",
            where: { id: req.session.store.id },
            attributes: ["id", "storeName"],
            through: { attributes: [] },
          },
        ],
      });

      const tables = await TableModel.findAll({
        where: {
          storeId: req.session.store.id,
          status: false,
        },
      });

      const totalRevenue = await OrderModel.findAll({
        attributes: ["storeId", [fn("SUM", col("totalPrice")), "totalRevenue"]],
        group: ["storeId"],
        raw: true,
        where: {
          storeId: req.session.store.id,
          statusPay: "Đã thanh toán",
        },
      });

      if (req.session.user.roleId == 3) {
        return res.redirect("/admin/order");
      }

      console.log(totalRevenue);

      res.render("admins/pages/dashboard/index", {
        layout: "admins/layouts/main-layout",
        title: "Dashboard",
        staffs,
        tables,
        books,
        totalRevenue:
          totalRevenue.length > 0 ? totalRevenue[0].totalRevenue : 0,
      });
    } catch (error) {
      console.log(error);
      res.render("admins/pages/dashboard/index", {
        layout: "admins/layouts/main-layout",
        title: "Dashboard",
      });
    }
  }
}

export default new DashboardController();
