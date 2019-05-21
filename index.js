var axios = require('axios');

axios.get("https://api.airtable.com/v0/appMOe3iUIzRnGEwo/food%20planner?api_key=keyBzhZxl6CGRgWBh")
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });