
  // export const _getPlaylistTracks = async (token, playlistId) => {
  //   try {
  //     const result = await fetch(
  //       `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
  //       {
  //         method: "GET",
  //         headers: { Authorization: "Bearer " + token },
  //       }
  //     );

  //     if (!result.ok) {
  //       throw new Error(`Failed to fetch playlist tracks: ${result.status}`);
  //     }

  //     const data = await result.json();
  //     return data.items;
  //   } catch (error) {
  //     console.error("Error fetching playlist tracks:", error);
  //   }
  // };

  // const _getTrackDetails = async (token, trackEndpoint) => {
  //   try {
  //     const result = await fetch(trackEndpoint, {
  //       method: "GET",
  //       headers: { Authorization: "Bearer " + token },
  //     });

  //     if (!result.ok) {
  //       throw new Error(`Failed to fetch track details: ${result.status}`);
  //     }

  //     const data = await result.json();
  //     return data;
  //   } catch (error) {
  //     console.error("Error fetching track details:", error);
  //   }
  // };

  // // _getPlaylistTracks('37i9dQZF1DXcWL5K0oNHcG');
  // _getTrackDetails();

  // Fetch playlist tracks


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
    // return data.items;
    // console.log(data.items)
    resetTracks();
    for (let i of data.items ) {
      createTrack(i.track);
      console.log(i.track);
    }
  } catch (error) {
    console.error("Error fetching playlist tracks:", error);
  }
};


// Fetch track details
// const _getTrackDetails = async (token, trackEndpoint) => {
//   try {
//     const result = await fetch(trackEndpoint, {
//       method: "GET",
//       headers: { Authorization: "Bearer " + token },
//     });

//     if (!result.ok) {
//       throw new Error(`Failed to fetch track details: ${result.status}`);
//     }

//     const data = await result.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching track details:", error);
//   }
// };


// _getTrackDetails(token, 'https://api.spotify.com/v1/tracks/{trackId}');



