export const stationAnalytics = {
  
  getMinTemp(station) {
    let minTemp = null;
   if(station.reports.length > 0) {
      minTemp = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
       if (station.reports[i].temperature < minTemp.temperature) {
         minTemp = station.reports[i];
       } 
      }
   }
return minTemp;
   
},


  getMaxTemp(station) {
    let maxTemp = null;
    if(station.reports.length > 0) {
      maxTemp = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].temperature > maxTemp.temperature) {
          maxTemp = station.reports[i];
        }
      }
    }
    
    return maxTemp;
    
  
      },
  

  
  getMinWindSpeed(station) {
    let minWindSpeed = null;
    if(station.reports.length >0){
      minWindSpeed = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
       if (station.reports[i].windSpeed < minWindSpeed.windSpeed) {
         minWindSpeed = station.reports[i];
       } 
      }
    }
    
return minWindSpeed;
    
},
  
  getMaxWindSpeed(station) {
    let maxWindSpeed = null;
    if(station.reports.length > 0) {
      maxWindSpeed = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
        if(station.reports[i].windSpeed > maxWindSpeed.windSpeed) {
          maxWindSpeed = station.reports[i];
        }
      }  
    }

    return maxWindSpeed;
      
    
      },
  
    getMinPressure(station) {
    let minPressure = null;
   if(station.reports.length > 0) {
      minPressure = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
       if (station.reports[i].pressure < minPressure.pressure) {
         minPressure = station.reports[i];
       } 
      }
    }
return minPressure;
},
  
     getMaxPressure(station) {
    let maxPressure = null;
   if(station.reports.length > 0) {
      maxPressure = station.reports[0];
      for (let i = 1; i < station.reports.length; i++) {
       if (station.reports[i].pressure > maxPressure.pressure) {
         maxPressure = station.reports[i];
       } 
      }
    }
return maxPressure;
},

  
   
  getCurrentTemp(station) {
    let currentTemp = null;
    if(station.reports.length > 0) {
      currentTemp = station.reports[0];
      for (let i=1; i < station.reports.length; i++) {
        currentTemp = station.reports[i];
      }
    }
    return currentTemp;
  },
  
   getCurrentWindSpeed(station) {
    let currentWindSpeed = null;
    if(station.reports.length > 0) {
      currentWindSpeed = station.reports[0];
      for (let i=1; i < station.reports.length; i++) {
        currentWindSpeed = station.reports[i];
      }
    }
    return currentWindSpeed;
  },
  

  
    getCurrentPressure(station) {
    let currentPressure = null;
    if(station.reports.length > 0) {
      currentPressure = station.reports[0];
      for (let i=1; i < station.reports.length; i++) {
        currentPressure = station.reports[i];
      }
    }
    return currentPressure;
  }
  
 
  
};

