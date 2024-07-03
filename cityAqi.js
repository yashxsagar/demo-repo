async function getCoordinates(city) {
    const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const data = await response.json();
    // Assuming the first result contains the needed coordinates
    const coordinates = data.results[0];
    return coordinates;
}

async function getAqi(coordinates) {
    const response = await fetch(`https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=us_aqi`);
    const data = await response.json();
    return data;
}
module.exports={getCoordinates, getAqi};
