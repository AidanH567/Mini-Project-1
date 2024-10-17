// Display Track UI Model
// const UIController = (function () {
  // Object to hold references to HTML selectors
  const DOMElements = {
    divSonglist: ".section-list ol", // Targeting the ordered list
  };

  // // Public methods
  // return {
  //   // Method to get input fields if needed
  //   inputField() {
  //     return {
  //       tracks: document.querySelector(DOMElements.divSonglist),
  //     };
  //   },
  const newsContainer = document.getElementById("news-list");
  // newsContainer.innerHTML = "";
    // Method to create a track list group item with details
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
    // template.querySelector(".card-artist-link").innerText = "Artist Link - " + song.artists[0].external_urls;
    template.querySelector(".card-image").src = song.album.images[0].url;
    song.preview_url ?
    template.querySelector(".card-audio").src = song.preview_url
    :template.querySelector(".card-song-check").innerText = song.name + " Preview is not avaliable ";
    // template.querySelector(".card-text").innerText = item.content;
    newsContainer.appendChild(template);
      // const html = `
      //   <li>
      //     <h1>${song.name}</h1>
      //     <article>
      //       <div>${song.id}</div>
      //     </article>
      //   </li>`;
      // document
      //   .querySelector(DOMElements.divSonglist)
      //   .insertAdjacentHTML("beforeend", html);
    }

    const resetTracks = () => {
       newsContainer.innerHTML = "";
    }
  // };
// })(); div>By ${artist}</div>   <img src="${img}" alt="${name} image">

