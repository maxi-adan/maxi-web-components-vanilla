class InputPasswordComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Input Password</h3>
                  <p class="component-description">Secure password input with mask toggling</p>
              </div>
              <div class="component-preview">
                  <div style="width: 100%;">
                      <ms-input-password 
                          label="Password" 
                          feedback="true"
                          toggle-mask="true">
                      </ms-input-password>
                  </div>
              </div>
          `;

    return card;
  }
}

export default InputPasswordComponent;
