class PreloadComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card card-component-wrapper";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Preload</h3>
                  <p class="component-description">Loading overlay for page transitions - Click to show</p>
              </div>
              <div class="component-preview">
                <ms-button label="Show" id="preload-button" />
                
              </div>
        `;

    const cardElement = card;
    setTimeout(() => {
      const button = cardElement.querySelector("#preload-button");

      const showLoader = () => {
        const preloadElement = document.createElement("ms-preload");
        preloadElement.image = "/assets/loading.gif";
        document.body.appendChild(preloadElement);

        setTimeout(() => {
          preloadElement.remove();
        }, 3000);
      };

      button.addEventListener("click", (event) => {
        showLoader();
      });
    }, 0);

    return card;
  }
}

export default PreloadComponent;
