var map = L.map('main_map').setView([-34.6012424,-58.3861497],13);

L.titleLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.maker([-34.6012424,-58.3861497]).addTo(map);
L.maker([-34.596932,-58.3808287]).addTo(map);
L.maker([-34.599564,-58.3778777]).addTo(map);