class ButtonsComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Buttons</h3>
                  <p class="component-description">Interactive buttons with multiple variants and icons</p>
              </div>
              <div class="component-preview">
                                    <!-- Solid Buttons -->
                    <div class="button-category">
                    <h4 class="button-category-title">Solid Buttons</h4>
                    <div class="button-row">
                        <ms-button variant="primary" label="Primary"></ms-button>
                        <ms-button variant="secondary" label="Secondary"></ms-button>
                        <ms-button variant="success" label="Success"></ms-button>
                        <ms-button variant="warning" label="Warning"></ms-button>
                        <ms-button variant="danger" label="Danger"></ms-button>
                    </div>
                    </div>

                    <!-- Outline Buttons -->
                    <div class="button-category">
                    <h4 class="button-category-title">Outline Buttons</h4>
                    <div class="button-row">
                        <ms-button variant="outline-primary" label="Primary"></ms-button>
                        <ms-button variant="outline-secondary" label="Secondary"></ms-button>
                        <ms-button variant="outline-success" label="Success"></ms-button>
                        <ms-button variant="outline-warning" label="Warning"></ms-button>
                        <ms-button variant="outline-danger" label="Danger"></ms-button>
                    </div>
                    </div>

                    <!-- Icon Buttons (Solid) -->
                    <div class="button-category">
                    <h4 class="button-category-title">Icon Buttons (Solid)</h4>
                    <div class="button-row">
                        <ms-button icon="./assets/icons/filter.svg" variant="primary"></ms-button>
                        <ms-button icon="./assets/icons/eraser-icon.svg" variant="secondary"></ms-button>
                        <ms-button icon="./assets/icons/edit.svg" variant="success"></ms-button>
                        <ms-button icon="./assets/icons/excel.svg" variant="warning"></ms-button>
                        <ms-button icon="./assets/icons/trash.svg" variant="danger"></ms-button>
                    </div>
                    </div>

                    <!-- Icon Buttons (Outline) -->
                    <div class="button-category">
                    <h4 class="button-category-title">Icon Buttons (Outline)</h4>
                    <div class="button-row">
                        <ms-button icon="./assets/icons/filter.svg" variant="outline-primary"></ms-button>
                        <ms-button icon="./assets/icons/eraser-icon.svg" variant="outline-secondary"></ms-button>
                        <ms-button icon="./assets/icons/edit.svg" variant="outline-success"></ms-button>
                        <ms-button icon="./assets/icons/excel.svg" variant="outline-warning"></ms-button>
                        <ms-button icon="./assets/icons/trash.svg" variant="outline-danger"></ms-button>
                    </div>
                    </div>
              </div>
          `;

    return card;
  }
}

export default ButtonsComponent;
