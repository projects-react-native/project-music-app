const  URL = 'https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=20e160d6e175c2daba33145b3c76a4a8&format=json';

function getArtists() {
    return fetch(URL)
        .then(response => response.json())
        .then(data => data.topartists.artist)
        .then(artists => artists.map(artist => {
            return {
                name: artist.name,
                image: artist.image[3]['#text'],
                likes: 200,
                comments: 140,
            }

        }))
}

export { getArtists }