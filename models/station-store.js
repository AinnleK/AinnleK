import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { reportStore } from "./report-store.js";

const db = initStore("stations");

export const stationStore = {
  async getAllStations() {
    await db.read();
    return db.data.stations;
  },

  async addStation(station) {
    await db.read();
   const newStation = {
     _id: v4(),
     title: station.title,
     userid: station.userid,
     lat:String(station.lat),
     lng: String(station.lng),
   };
    db.data.stations.push(newStation);
    await db.write();
    return newStation;
  },

   
  
  
  async getStationById(id) {
    await db.read();
    const list = db.data.stations.find((station) => station._id === id);
    if (list) {
      list.reports = await reportStore.getReportsByStationId(list._id);
    }
    return list;
  },

  async getStationsByUserId(userid) {
    await db.read();
    return db.data.stations.filter((station) => station.userid === userid);
  },

  async deleteStationById(id) {
    await db.read();
    const index = db.data.stations.findIndex((station) => station._id === id);
    db.data.stations.splice(index, 1);
    await db.write();
  },

  async deleteAllStations() {
    db.data.stations = [];
    await db.write();
  },
};
