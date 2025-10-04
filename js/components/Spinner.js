class SpinnerComponent {
    static render() {
        const card = document.createElement("div");
        card.className = "component-card card-component-wrapper";

        card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Spinner</h3>
                  <p class="component-description">Animated loading spinner</p>
              </div>
              <div class="component-preview">
                <ms-spinner width="3em" height="3em" />
              </div>
        `;

        return card;
    }
}

export default SpinnerComponent;