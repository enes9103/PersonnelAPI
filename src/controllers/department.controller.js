"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const Department = require("../models/department.model");

module.export = {
  list: async (req, res) => {
    // const data = await Department.find(search).sort(sort).skip(skip).limit(limit)
    const data = await res.getModelList(Department);

    res.status(200).send({
      error: false,
      data,
    });
  },

  creat: async (req, res) => {
    
  },

  read: async (req, res) => {},

  update: async (req, res) => {},

  delete: async (req, res) => {},
};
