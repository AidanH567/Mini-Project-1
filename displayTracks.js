
  // const DOMElements = {
  //   divSonglist: ".section-list ol", 
  // };
  const newsContainer = document.getElementById("news-list");
    const createTrack = (song) => {
      const template = document
      .getElementById("song-template")
      .content.cloneNode(true);
    template.querySelector(".card-title").innerText = "Title - " + song.name;
    template.querySelector(".card-artist").innerText = "Artist - " + song.artists[0].name;
    template.querySelector(".card-album").innerText = "Album - " + song.album.name;
    template.querySelector(".card-title").href = song.uri;
    song.artists[0].external_urls.spotify
    ? template.querySelector(".card-artist").href = song.artists[0].external_urls.spotify
    : null;
    template.querySelector(".card-image").src = song.album.images[0].url;
    song.preview_url ?
    template.querySelector(".card-audio").src = song.preview_url
    :template.querySelector(".card-song-check").innerText = song.name + " Preview is not avaliable ";
    newsContainer.appendChild(template);
    }

    const resetTracks = () => {
       newsContainer.innerHTML = "";
    }
