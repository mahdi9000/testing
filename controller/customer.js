const axios = require("axios");
const { signToken } = require("../helpers/signature");
const urlink = require("../config");
class CustomerController {
  static async inquiryCus(req, res) {
    try {
      const signed = (await signToken()).token;
      const { cif } = req.body;
      const timestamp = (await signToken()).timeStamp;
      const { data: data2 } = await axios({
        method: "POST",
        url: urlink,
        // url: `http://192.168.254.61:8080/transaction/channel/api/customer/inquiryCustomerSid/{cif}`,
        data: {
          cif,
          sign: signed,
          systemID: "SystemID",
          timestamp,
        },
        timeout: 1000 * 5,
      });

      res.status(201).json(data2);
    } catch (err) {
      console.log(err);
      console.error(err.message);
    }
  }

  // static async inquiryStatus(req, res) {
  //   try {
  //     const signed = (await signToken()).token;
  //     const timestamp = (await signToken()).timeStamp;
  //     const { cif } = req.body;
  //     const { data: data2 } = await axios({
  //       method: "POST",
  //       url: `http://192.168.254.61:8080/transaction/channel/api/customer/inquiryStatusSid/{cif}`,
  //       data: {
  //         cif,
  //         sign: signed,
  //         systemID: "SystemID",
  //         timestamp,
  //       },
  //     });

  //     res.status(201).json(data2);
  //     console.log(timestamp);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
}
module.exports = CustomerController;
