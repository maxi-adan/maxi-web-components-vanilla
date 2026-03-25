class IconComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card full-width-card";

    const iconNames = [
      "home",
      "search",
      "settings",
      "user",
      "arrow-left",
      "arrow-right",
      "alert-circle",
      "alert-triangle",
      "bell",
      "calendar",
      "check",
      "check-circle",
      "chevron-down",
      "chevron-left",
      "chevron-right",
      "chevron-up",
      "copy",
      "download",
      "edit",
      "eye",
      "eye-off",
      "filter",
      "info",
      "lock",
      "mail",
      "menu",
      "minus",
      "plus",
      "refresh",
      "trash",
      "unlock",
      "upload",
      "x",
    ];

    card.innerHTML = `
      <div class="component-preview" style="display:block; padding:16px;">
        <div class="icon-wrapper">

          <div class="icon-top-grid">

            <div>
              <h4 class="icon-label">Basic</h4>
              <div class="icon-row">
                <ms-icon name="home"></ms-icon>
                <ms-icon name="search"></ms-icon>
                <ms-icon name="settings"></ms-icon>
                <ms-icon name="user"></ms-icon>
                <ms-icon name="bell"></ms-icon>
              </div>
            </div>

            <div>
              <h4 class="icon-label">Sizes</h4>
              <div class="icon-sizes-row">
                <div class="icon-size-item">
                  <ms-icon name="home" size="16"></ms-icon>
                  <span class="icon-size-label">16px</span>
                </div>
                <div class="icon-size-item">
                  <ms-icon name="home" size="24"></ms-icon>
                  <span class="icon-size-label">24px</span>
                </div>
                <div class="icon-size-item">
                  <ms-icon name="home" size="32"></ms-icon>
                  <span class="icon-size-label">32px</span>
                </div>
                <div class="icon-size-item">
                  <ms-icon name="home" size="48"></ms-icon>
                  <span class="icon-size-label">48px</span>
                </div>
                <div class="icon-size-item">
                  <ms-icon name="home" size="64"></ms-icon>
                  <span class="icon-size-label">64px</span>
                </div>
              </div>
            </div>

            <div>
              <h4 class="icon-label">Colors</h4>
              <div class="icon-row">
                <ms-icon name="search"         size="32" color="#3B82F6"></ms-icon>
                <ms-icon name="check-circle"   size="32" color="#10B981"></ms-icon>
                <ms-icon name="alert-triangle" size="32" color="#F59E0B"></ms-icon>
                <ms-icon name="alert-circle"   size="32" color="#EF4444"></ms-icon>
                <ms-icon name="info"           size="32" color="#8B5CF6"></ms-icon>
                <ms-icon name="lock"           size="32" color="#6B7280"></ms-icon>
              </div>
            </div>

          </div>

          <div>
            <h4 class="icon-label">All Available Icons</h4>
            <div class="icon-all-grid">
              ${iconNames
                .map(
                  (name) => `
                <div class="icon-card">
                  <ms-icon name="${name}" size="24"></ms-icon>
                  <span class="icon-name">${name}</span>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>

        </div>
      </div>
    `;

    return card;
  }
}

export default IconComponent;
