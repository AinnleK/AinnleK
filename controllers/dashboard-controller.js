import { stationStore } from "../models/station-store.js";
import { accountsController } from "./accounts-controller.js";
import axios from "axios";

const weatherRequestUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tramore,Ireland&units=metric&appid=f80802a93df8d68ec7ddd89bd990997f`;

export const dashboardController = {
  async index(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const viewData = {
      title: "Station Dashboard",
      stations: await stationStore.getStationsByUserId(loggedInUser._id),
    };
    console.log("dashboard rendering");
    response.render("dashboard-view", viewData);
  },

  async addStation(request, response) {
    const loggedInUser = await accountsController.getLoggedInUser(request);
    const newStation = {
      title: request.body.title,
      lat: request.body.lat,
      lng: request.body.lng,
      userid: loggedInUser._id,

    };
    console.log(`adding station ${newStation.title}`);
    await stationStore.addStation(newStation);
    response.redirect("/dashboard");
    

  },

  

  async deleteStation(request, response) {
    const stationId = request.params.id;
    console.log(`Deleting Station ${stationId}`);
    await stationStore.deleteStationById(stationId);
    response.redirect("/dashboard");
  },
};

