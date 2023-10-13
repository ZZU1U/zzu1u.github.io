function updateDateTime() {
    var d = new Date();

    var utc = d.getTime() + (d.getTimezoneOffset() * 60000);

    var nd = new Date(utc + (3600000*7));

    document.querySelector('#datetime').textContent = "It's "+ nd.toLocaleString() + " in Kemerovo";
}

setInterval(updateDateTime, 500);