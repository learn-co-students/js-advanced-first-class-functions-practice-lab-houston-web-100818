const logDriverNames = function(drivers) {
  drivers.forEach(function(driver) {
    console.log(driver.name)
  })
}

const logDriversByHometown = function(drivers, location) {
  logDriverNames(drivers.filter(function(driver) {
    return driver.hometown === location
  }))
}

const driversByRevenue = function(drivers) {
  return [...drivers].sort(function(driverA, driverB) {
    return driverA.revenue - driverB.revenue
  })
}

const driversByName = function(drivers) {
  return [...drivers].sort(function(driverA, driverB) {
    return driverA.name.localeCompare(driverB.name)
  })
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function(agg, driver, i, drivers) {
    agg += driver.revenue
    return agg
  }, 0)
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length
}
