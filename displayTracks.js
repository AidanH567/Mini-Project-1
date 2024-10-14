// UI Module
const UIController = (function () {
  // Object to hold references to HTML selectors
  const DOMElements = {
    buttonSubmit: "#btn_submit", // Keep if you have a submit button
    divSongDetail: "#song-detail", // For displaying track details
    divSonglist: ".song-list", // For displaying the list of tracks
  };

  // Public methods
  return {
    // Method to get input fields if needed
    inputField() {
      return {
        tracks: document.querySelector(DOMElements.divSonglist),
        songDetail: document.querySelector(DOMElements.divSongDetail),
      };
    },

    // Method to create a track list group item
    createTrack(id, name) {
      const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`;
      document
        .querySelector(DOMElements.divSonglist)
        .insertAdjacentHTML("beforeend", html);
    },

    // Method to create the song detail
    createTrackDetail(img, title, artist) {
      const detailDiv = document.querySelector(DOMElements.divSongDetail);
      // Clear the song detail div when a new song is clicked
      detailDiv.innerHTML = "";

      const html = `
            <div class="row col-sm-12 px-0">
                <img src="${img}" alt="">        
            </div>
            <div class="row col-sm-12 px-0">
                <label class="form-label col-sm-12">${title}:</label>
            </div>
            <div class="row col-sm-12 px-0">
                <label class="form-label col-sm-12">By ${artist}:</label>
            </div> 
            `;

      detailDiv.insertAdjacentHTML("beforeend", html);
    },

    resetTrackDetail() {
      this.inputField().songDetail.innerHTML = "";
    },

    resetTracks() {
      this.inputField().tracks.innerHTML = "";
      this.resetTrackDetail();
    },
  };
})();
