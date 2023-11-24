async function getLocations() {
    navigator.geolocation.getCurrentPosition(position => {
        const { latitude, longitude } = position.coords;
        // Show a map centered at latitude / longitude.

        let map = L.map('map').setView([latitude, longitude], 16);
        
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        L.marker([latitude, longitude]).addTo(map)
            .bindPopup(`You're right Here!`)
            .openPopup();
      });

}
getLocations()