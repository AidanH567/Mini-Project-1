

const _getPlaylistTracks = async (token, playlistId) => {
  try {
    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    if (!result.ok) {
      throw new Error(`Failed to fetch playlist tracks: ${result.status}`);
    }

    const data = await result.json();
    let tenItems = [];
    for (let j of data.items) {
       if (tenItems.length <= 11) {
        tenItems.push(j)
       }
    }
   
    resetTracks();
    for (let i of tenItems ) {
      createTrack(i.track);
      console.log(i.track);
    }
  } catch (error) {
    console.error("Error fetching playlist tracks:", error);
  }
};

