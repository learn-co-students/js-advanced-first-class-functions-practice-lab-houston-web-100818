// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function(a,b){
    return (a.revenue - b.revenue)
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function(a,b) {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  let newRay = drivers.slice().map(driver => driver.revenue)
  return newRay.reduce((acc, val) => acc + val)
}

function averageRevenue(drivers) {
  let newRay = drivers.slice().map(driver => driver.revenue)
  return totalRevenue(drivers)/drivers.length
}