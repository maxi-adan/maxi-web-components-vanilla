class KnobComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Knob</h3>
                  <p class="component-description">Rotary input component for numerical values</p>
              </div>
              <div class="component-preview">
                  <div style="text-align: center; width: 100%;">
                      <ms-knob value="25" size="60"></ms-knob>
                      <ms-knob value="60" size="100" value-color="#10B981" range-color="#D1FAE5" text-color="#065F46"></ms-knob>
                  </div>
              </div>
          `;

    return card;
  }
}

export default KnobComponent;
