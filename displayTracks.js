// Display Track UI Model
const UIController = (function () {
  // Object to hold references to HTML selectors
  const DOMElements = {
    divSonglist: ".section-list ol", // Targeting the ordered list
  };

  // Public methods
  return {
    // Method to get input fields if needed
    inputField() {
      return {
        tracks: document.querySelector(DOMElements.divSonglist),
      };
    },

    // Method to create a track list group item with details
    createTrack(id, name, img, artist) {
      const html = `
        <li>
          <h1>${id}</h1>
          <article>
            <div>${name}</div>
            <div>By ${artist}</div>
          </article>
          <img src="${img}" alt="${name} image">
        </li>`;
      document
        .querySelector(DOMElements.divSonglist)
        .insertAdjacentHTML("beforeend", html);
    },

    resetTracks() {
      this.inputField().tracks.innerHTML = "";
    },
  };
})();