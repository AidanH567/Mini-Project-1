
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

    } catch (error) {
        console.error("Error in app.js:", error);
    }
});

