const healthIssue = require("../models/healthIssue");
const member_healthissue = require("../models/member_healthIssue");

module.exports = {
  data: async (_req, res) => {
    try {
      const healthIssues = await healthIssue.findAll();
      return res.status(200).json({
        status: 200,
        message: "Health Issues succesfully sent.",
        healthIssues: healthIssues,
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
      const _healthIssue = await healthIssue.findOne({
        where: {
          healthIssueID: req.params.id,
        },
      });
      if (!_healthIssue) {
        return res.status(404).json({
          status: 404,
          message: "Health Issue not found.",
        });
      } else {
        return res.status(200).json({
          status: 200,
          message: "Health Issue succesfully sent.",
          healthIssue: _healthIssue,
        });
      }
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
      const healthIssues = await healthIssue.create({
        healthIssueName: req.body.healthIssueName,
        healthIssueDesc: req.body.healthIssueDesc,
        prohibition: req.body.prohibition,
      });
      return res.status(201).json({
        status: 201,
        message: "Health Issue succesfully created.",
        data: healthIssues,
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
    const _healthIssue = await healthIssue.update(
      {
        healthIssueName: req.body.healthIssueName,
        healthIssueDesc: req.body.healthIssueDesc,
        prohibition: req.body.prohibition,
      },
      {
        where: {
          healthIssueID: req.params.id,
        },
      }
    );
    if (_healthIssue) {
      return res.status(404).json({
        status: 404,
        message: "Health Issue not found.",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Health Issue successfully updated.",
      healthIssue: _healthIssue,
    });
  },
  delete: async (req, res) => {
    const healthIssues = healthIssue.destroy({
      where: {
        healthIssueID: req.params.id,
      },
    });
    if (healthIssues == null) {
      return res.status(404).json({
        status: 404,
        message: "Health Issue not found.",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Health Issue successfully deleted.",
    });
  },
  assign: async (req, res) => {
    try {
      console.log(req.body);

      const { memberID, healthIssueID, isChecked } = req.body;

      if (isChecked) {
        // Assign the health issue
        await member_healthissue.findOrCreate({
          where: {
            memberMemberID: memberID,
            healthIssueHealthIssueID: healthIssueID,
          },
        });

        return res.status(201).json({
          status: 201,
          message: "Health issue assigned.",
        });
      } else {
        // Unassign the health issue
        await member_healthissue.destroy({
          where: {
            memberMemberID: memberID,
            healthIssueHealthIssueID: healthIssueID,
          },
        });

        return res.status(200).json({
          status: 200,
          message: "Health issue unassigned.",
        });
      }
    } catch (error) {
      console.error(error.message);
      return res.status(500).json({
        status: 500,
        message: "Server error.",
      });
    }
  },
};
