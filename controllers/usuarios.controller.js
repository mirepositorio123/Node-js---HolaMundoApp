const { response } = require("express");

const usuariosGet = (req, res) => {
    res.json({
        ok: true,
        msg: "Mi primer Get",
      });
};

module.exports = {
  usuariosGet,
};
