class PopoverComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Popover</h3>
                  <p class="component-description">Contextual menu display relative to a trigger element</p>
              </div>
              <div class="component-preview">
                  <div style="display: flex; justify-content: center; width: 100%;">
                      <ms-popover placement="bottom" trigger="hover">
                          <div slot="trigger" style="cursor: pointer; display: flex; align-items: center; gap: 8px;">
                             <ms-button slot="trigger" label="Hover me"></ms-button>
                          </div>
                          <div class="profile-header">
                              <img src="https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png" class="profile-avatar" />
                              <div class="profile-info">
                                  <span class="profile-name">Amy Elsner</span>
                                  <span class="profile-role">Administrator</span>
                              </div>
                          </div>
                          <ul class="profile-menu">
                              <li><a href="#"><span class="menu-icon"></span> My Profile</a></li>
                              <li><a href="#"><span class="menu-icon"></span> Settings</a></li>
                              <li><a href="#"><span class="menu-icon"></span> Notifications</a></li>
                          </ul>
                          <div class="profile-footer">
                              <ms-button label="Sign Out" variant="primary" style="--ms-button-padding: 8px 16px;"></ms-button>
                          </div>
                      </ms-popover>
                  </div>
              </div>
          `;

    return card;
  }
}

export default PopoverComponent;
