class TooltipComponent {
    static render() {
        const card = document.createElement("div");
        card.className = "component-card card-component-wrapper";

        card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Tooltip</h3>
                  <p class="component-description">Hover tooltips for additional information</p>
              </div>
              <div class="component-preview">
                <div style="display: flex; gap: 10px;">
                    <ms-tooltip position="right" content="This is a tooltip">
                    <ms-badge value="Hover me" severity="success" />
                    </ms-tooltip>
                </div>
              </div>
        `;

        return card;
    }
}

export default TooltipComponent;