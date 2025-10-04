class BadgeComponent {
    static render() {
        const card = document.createElement("div");
        card.className = "component-card card-component-wrapper";

        card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Badge</h3>
                  <p class="component-description">Small status indicators and labels</p>
              </div>
              <div class="component-preview">
                    <ms-badge value="Basic" severity="basic"></ms-badge>
                    <ms-badge value="Info" severity="info"></ms-badge>
                    <ms-badge value="Success" severity="success"></ms-badge>
                    <ms-badge value="Warning" severity="warning"></ms-badge>
                    <ms-badge value="Danger" severity="danger"></ms-badge>
              </div>
        `;

        return card;
    }
}

export default BadgeComponent;