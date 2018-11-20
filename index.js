
function logDriverNames(drivers) {
    drivers.forEach(element => {
    console.log(element.name)
    })
}


function logDriversByHometown(drivers, location) {
    result = drivers.filter(driver => driver.hometown == location);
    result.forEach(element => {
    console.log(element.name)
    })

}

function driversByRevenue(drivers, revenue) {

    let result = []

    for (let index = 0; index < drivers.length; index++) {
        const element = drivers[index];
        result.push(element);
    }
    result.sort(function(obj1, obj2) {
           return obj1.revenue - obj2.revenue;
    });

    return result;
}


function driversByName(drivers, name) {

    let result = []

    for (let index = 0; index < drivers.length; index++) {
        const element = drivers[index];
        result.push(element);
    }
    result.sort(function(a, b) {
        if(a.name < b.name) { return -1; }
        if(a.name > b.name) { return 1; }
        return 0;
    });

    return result;
}

function totalRevenue(drivers) {
    
    let revenues = drivers.map(function(driver) {
        return driver.revenue;
    });

    let total = revenues.reduce(function(prev, curr) {
        return prev + curr;
    });
    return total;

}

function averageRevenue(drivers) {
    return (totalRevenue(drivers) / drivers.length)
}
