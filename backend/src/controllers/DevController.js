const axios = require("axios");
const Dev = require("../models/Dev");
const parseStringArray = require("../utils/parseStringArray");

module.exports = {
  async index(request, response) {
    const devs = await Dev.find();

    return response.json(devs);
  },

  async store(request, response) {
    const { github_username, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      resp = await axios.get(`https://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = resp.data;

      const techsArray = parseStringArray(techs); //.split(",").map(tech => tech.trim());

      const location = {
        type: "Point",
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        name,
        github_username,
        bio,
        avatar_url,
        techs: techsArray,
        location
      });
    }

    return response.json(dev);
  }
};
