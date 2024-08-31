import { stationStore } from "../models/station-store.js";
import { reportStore } from "../models/report-store.js";
import{ stationAnalytics } from "../utils/station-analytics.js";

export const stationController = {
  async index(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    
    const minTemp = stationAnalytics.getMinTemp(station);
    const maxTemp = stationAnalytics.getMaxTemp(station);
    const minWindSpeed = stationAnalytics.getMinWindSpeed(station);
    const maxWindSpeed = stationAnalytics.getMaxWindSpeed(station);
    const minPressure = stationAnalytics.getMinPressure(station);
    const maxPressure = stationAnalytics.getMaxPressure(station);
    
      const currentTemp = stationAnalytics.getCurrentTemp(station);
     const currentWindSpeed = stationAnalytics.getCurrentWindSpeed(station);
     const currentPressure = stationAnalytics.getCurrentPressure(station);
    
    
    const viewData = {
      title: "Station",
      station: station,
      lat: "lat",
      lng: "lng",
      minTemp : minTemp,
      maxTemp : maxTemp,
      minWindSpeed: minWindSpeed,
      maxWindSpeed: maxWindSpeed,
      minPressure: minPressure,
      maxPressure: maxPressure,
      currentTemp: currentTemp,
      currentWindSpeed: currentWindSpeed,
      
      currentPressure : currentPressure
    };
    response.render("station-view", viewData);
  },
  
  async addReport(request, response) {
    const station = await stationStore.getStationById(request.params.id);
    const newReport = {
      code: request.body.code,
      temperature: Number(request.body.temperature),
      windSpeed: Number(request.body.windSpeed),
      windDirection: request.body.windDirection,
      pressure: Number(request.body.pressure),
    };
    console.log(`adding report ${newReport.code}`);
    await reportStore.addReport(station._id, newReport);
    response.redirect("/station/" + station._id);
  },
  async deleteReport(request,response) {
    const stationId = (request.params.stationid);
    const reportId = (request.params.reportid);
    console.log(`Deleting Report ${reportId} from Station ${stationId}`);
    await reportStore.deleteReportById(reportId);
    response.redirect("/station/"+ stationId);
  },
};


