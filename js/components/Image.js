class ImageComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Image</h3>
                  <p class="component-description">Image component with preview capability</p>
              </div>
              <div class="component-preview">
                  <div style="text-align: center; width: 100%;">
                      <ms-image 
                          src="https://www.primefaces.org/cdn/primevue/images/galleria/galleria10.jpg" 
                          alt="Image Description"
                          width="250"
                          preview="true">
                      </ms-image>
                  </div>
              </div>
          `;

    return card;
  }
}

export default ImageComponent;
