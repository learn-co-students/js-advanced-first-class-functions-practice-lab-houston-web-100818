function logDriverNames(drivers){
    drivers.forEach(function(el,i,arr){
        console.log(el.name);
    })
};

function logDriversByHometown(drivers, hometown){
    drivers.forEach(function(el,i,arr){
        if (el.hometown == hometown){
            console.log(el.name);
        }
    })
};

function driversByRevenue(drivers){
    return drivers.slice(0).sort(function(a,b){
        return (a.revenue - b.revenue);
    })
};

function driversByName(drivers){
    return drivers.slice(0).sort(function(a,b){
        return a.name.localeCompare(b.name);
    })
};

function totalRevenue(drivers){
    return drivers.reduce(function(agg, el, i, arr) {
        return agg + el.revenue;
    }, 0)
};

function averageRevenue(drivers){
    return totalRevenue(drivers) / drivers.length;
};