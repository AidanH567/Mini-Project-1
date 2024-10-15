import APIController from "./api-auth";
import FetchController from "./fetch";
import UIController from "./displayTracks";

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Step 1: Get the Spotify API token
        const token = await APIController.getToken(); // Call your method to get the token
        console.log("Token:", token);
        // Check if token was retrieved successfully
        if (!token) {
            throw new Error("Failed to retrieve Spotify token.");
        }
  
        // Step 2: Specify the playlist ID you want to use
        const playlistId = '3cEYpjA9oz9GiPac4AsH4n';// Use just the playlist ID
  
        // Step 3: Fetch tracks from the specified playlist
        const tracks = await FetchController.getPlaylistTracks(token, playlistId);

        // Check if tracks were fetched successfully
        if (!tracks) {
            throw new Error("Failed to fetch tracks.");
        }
  
        // Step 4: Clear existing tracks in UI
        UIController.resetTracks();
  
        // Step 5: Loop through tracks and add them to the UI
        tracks.forEach((trackItem) => {
            const track = trackItem.track; // Access the track object
            const trackName = track.name;
            const trackImg = track.album.images[0].url; // Get the first image for the album
            const artistNames = track.artists.map(artist => artist.name).join(', '); // Join multiple artists

            // Create a track in the UI
            UIController.createTrack(track.id, trackName, trackImg, artistNames);
        });
    } catch (error) {
        console.error("Error in app.js:", error);
    }
});

