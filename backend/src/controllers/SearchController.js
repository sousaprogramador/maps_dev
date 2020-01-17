const Dev = require("../models/Dev");
const parseStringArray = require("../utils/parseStringArray");

module.exports = {
  async index(request, response) {
    const { techs, latitude, longitude } = request.query;

    const techsArray = parseStringArray(techs);

    //Dev.ensureIndex({ "geo.index": "Point" });
    const dev = await Dev.find({
      techs: {
        $in: techsArray
      },
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [longitude, latitude]
          },
          $coordinates: 10000
        }
      }
    });

    //console.log(techsArray);

    return response.json({ dev });
  }
};
