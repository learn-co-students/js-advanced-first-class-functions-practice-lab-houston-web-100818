const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  })
};

const logDriversByHometown = function (drivers, location) {
  let newDrivers = drivers.filter(driver => driver.hometown === location);
  return logDriverNames(newDrivers);
}

// custom compare for revenue attribute:
// function compare(a,b) {
//   if (a.revenue < b.revenue) {
//     return -1;
//   }
//   else if (a.revenue > b.revenue) {
//     return 1;
//   }
//   else return 0;
// }

const driversByRevenue = function (drivers) {
  let newArray = drivers.slice();
  newArray.sort((a,b) => (a.revenue > b.revenue) ? 1 : ((b.revenue > a.revenue) ? -1 : 0));
  return newArray;
}

const driversByName = function (drivers) {
  let newArray = drivers.slice();
  newArray.sort((a,b) => {return a.name.localeCompare(b.name); });
  return newArray;
}

const totalRevenue = function (drivers) {
  let newArray = drivers.slice().map(driver => driver.revenue);
  return newArray.reduce((a,b) => a+b);
}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
}
