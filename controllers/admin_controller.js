const admin = require("../models/admin");
const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    try {
      await console.log(req.body);
      const _admin = await admin.findOne({
        where: { adminEmail: req.body.adminEmail },
      });
      if (!_admin) {
        return res.status(404).json({
          status: 401,
          message: "Account not found.",
        });
      }

      const match = bcrypt.compare(_admin.password, req.body.password);
      if (!match) {
        return res.status(401).json({
          status: 401,
          message: "Password incorrect.",
        });
      }

      return res.status(200).json({
        status: 200,
        message: "Berhasil login!",
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  data: async (_req, res) => {
    try {
      const admins = await admin.findAll();

      return res.status(200).json({
        status: 200,
        message: "Admins succesfully sent.",
        admins: admins,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  index: async (req, res) => {
    try {
      const _admin = await admin.findOne({
        where: {
          adminID: req.params.id,
        },
      });

      if (!_admin) {
        return res.status(404).json({
          status: 404,
          message: "Admin not found.",
        });
      }
      return res.status(200).json({
        status: 200,
        message: "Admin succesfully sent.",
        admin: _admin,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  store: async (req, res) => {
    try {
      const _admin = await admin.create({
        adminName: req.body.adminName,
        adminEmail: req.body.adminEmail,
        password: req.body.password,
        permission: await bcrypt.hash(req.body.permission, 10),
      });
      return res.status(201).json({
        status: 201,
        message: "Admin succesfully created.",
        admin: _admin,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  update: async (req, res) => {
    try {
      const _admin = await admin.update(
        {
          adminName: req.body.adminName,
          adminEmail: req.body.adminEmail,
          password: await bcrypt.hash(req.body.permission),
          permission: req.body.permission,
        },
        {
          where: {
            adminID: req.params.id,
          },
        },
      );

      if (!_admin) {
        return res.status(404).json({
          status: 404,
          message: "Admin not found.",
        });
      }

      return res.status(200).json({
        status: 200,
        message: "Admin successfully updated.",
        admin: _admin,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
  delete: async (req, res) => {
    try {
      await admin.destroy({
        where: {
          adminID: req.params.id,
        },
      });
      return res.status(200).json({
        status: 200,
        message: "data successfully deleted",
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
};
