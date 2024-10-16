// import APIController from "./api-auth";
// import FetchController from "./fetch";
// import UIController from "./displayTracks";

// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const token = await APIController.getToken();
//         console.log("Token:", token);
//         if (!token) {
//             throw new Error("Failed to retrieve Spotify token.");
//         }
  
//         const playlistId = '37i9dQZF1DXcWL5K0oNHcG';
  
//         const tracks = await FetchController.getPlaylistTracks(token, playlistId);
//         if (!tracks) {
//             throw new Error("Failed to fetch tracks.");
//         }
  
//         UIController.resetTracks();
  
//         tracks.slice(0, 10).forEach((trackItem) => {
//             const track = trackItem.track;
//             const trackName = track.name;
//             const trackImg = track.album.images[0].url;
//             const artistNames = track.artists.map(artist => artist.name).join(', ');
//             UIController.createTrack(track.id, trackName, trackImg, artistNames);
//         });
        
//     } catch (error) {
//         console.error("Error in app.js:", error);
//     }
// });

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const token = await _getToken();
        console.log("Token:", token);
        if (!token) {
            throw new Error("Failed to retrieve Spotify token.");
        }

        const playlistId = '37i9dQZF1DXcWL5K0oNHcG';

        const tracks = await _getPlaylistTracks(token, playlistId);
        if (!tracks) {
            throw new Error("Failed to fetch tracks.");
        }

        // resetTracks();

        tracks.slice(0, 10).forEach((trackItem) => {
            const track = trackItem.track;
            const trackName = track.name;
            const trackImg = track.album.images[0].url;
            const artistNames = track.artists.map(artist => artist.name).join(', ');
            createTrack(track.id, trackName, trackImg, artistNames);
        });

    } catch (error) {
        console.error("Error in app.js:", error);
    }
});

