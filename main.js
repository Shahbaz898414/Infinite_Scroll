 // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

const count=10;
const apiKey = 'CRFE4xQEnYvOo3UQF5Y6FguH60TYf81BtUAi4mN_P9s';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unplash API

async function getPhotos(){
  try {
    const response=await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch(error){

  }
}

getPhotos();