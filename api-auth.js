const APIController = (function () {
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
      return accessToken;
    } catch (error) {
      console.error("Error fetching access token:", error);
    }
  };

  return {
    getToken: _getToken,
  };
})();
