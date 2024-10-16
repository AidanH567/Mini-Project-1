// import { _getPlaylistTracks } from "./fetch";

//   const clientId = "7a14e5db9231437883a1a2163b368ee9";
//   const clientSecret = "aef53b1820994dea8f8f718a46691f1d";

//   let accessToken = "";

//   const _getToken = async () => {
//     try {
//       const result = await fetch("https://accounts.spotify.com/api/token", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
//         },
//         body: "grant_type=client_credentials",
//       });

//       if (!result.ok) {
//         throw new Error(`Failed to fetch token: ${result.status}`);
//       }

//       const data = await result.json();
//       accessToken = data.access_token;
//       _getPlaylistTracks(data.access_token,'37i9dQZF1DXcWL5K0oNHcG');
//       return accessToken;
//     } catch (error) {
//       console.error("Error fetching access token:", error);
//     }
//   };

//  _getToken()


const clientId = "7a14e5db9231437883a1a2163b368ee9";
const clientSecret = "aef53b1820994dea8f8f718a46691f1d";

let accessToken = "";

const _getToken = async () => {
  try {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });

    if (!result.ok) {
      throw new Error(`Failed to fetch token: ${result.status}`);
    }

    const data = await result.json();
    accessToken = data.access_token;
    _getPlaylistTracks(data.access_token, '37i9dQZF1DXcWL5K0oNHcG');
    
//     https://open.spotify.com/playlist/37i9dQZF1DX0aSJooo0zWR?si=36515d789d5d4d1e
// https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt?si=d9830b719aec4a55
// 
// 
//     
    return accessToken;
  } catch (error) {
    console.error("Error fetching access token:", error);
  }
};

_getToken();
const newJazzPlaylist = () =>{
  _getPlaylistTracks(accessToken, '37i9dQZF1DXcWL5K0oNHcG')
}
const classicJazz = () =>{ console.log("test")
  _getPlaylistTracks(accessToken, '37i9dQZF1DXbITWG1ZJKYt')
  
}
const jazzFusion= () => {
  _getPlaylistTracks(accessToken, '37i9dQZF1DX0aSJooo0zWR')
}
// document.getElementsByClassName("newJazzButton").addEventListener("click", _getPlaylistTracks(data.access_token, '37i9dQZF1DXcWL5K0oNHcG'));
//     document.getElementsByClassName("classicJazzButton").addEventListener("click", _getPlaylistTracks(data.access_token, '37i9dQZF1DX0aSJooo0zWR'));
//     document.getElementsByClassName("jazzFusionButton").addEventListener("click", _getPlaylistTracks(data.access_token, '37i9dQZF1DXbITWG1ZJKYt'));
//'37i9dQZF1DXbITWG1ZJKYt' 


