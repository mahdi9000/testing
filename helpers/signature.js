const axios = require("axios");

const signToken = async () => {
  try {
    const userId = "soa";
    const password = "s04xxx007";
    const timeStamp = Math.floor(Date.now() / 1000);
    const { data: token } = await axios({
      method: "GET",
      url: `http://192.168.254.61:8080/transaction/channel/api/transaction/signature/generator?userId=${userId}&password=${password}&timestamp=${timeStamp}`,
      // timeout: 1000 * 5,
    });
    // console.log(token);
    // console.log(timeStamp);
    return { token, timeStamp };
  } catch (err) {
    console.log(err);
  }
};

module.exports = { signToken };
