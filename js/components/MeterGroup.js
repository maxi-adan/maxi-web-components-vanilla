class MeterGroupComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    const values = [
      { label: "Used", value: 65, color: "#2196F3" },
      { label: "Available", value: 25, color: "#4CAF50" },
      { label: "System", value: 10, color: "#FFC107" }
    ];

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Meter Group</h3>
                  <p class="component-description">Displays relative values within a range as group of bars</p>
              </div>
              <div class="component-preview">
                  <div style="width: 100%;">
                      <ms-meter-group id="meter-horizontal"></ms-meter-group>
                  </div>
              </div>
          `;

    setTimeout(() => {
        const hMeter = card.querySelector('#meter-horizontal');
        if (hMeter) hMeter.values = values;
    }, 0);

    return card;
  }
}

export default MeterGroupComponent;
