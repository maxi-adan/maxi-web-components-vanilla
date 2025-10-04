class ChipsComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Chips</h3>
                  <p class="component-description">Small tags for labels and selections, Currently only valid value is , to create a new item when comma key is pressed.</p>
              </div>
              <div class="component-preview chips-preview">
                    <ms-chips
                        id="chips-id"
                        separator=","
                        placeholder="Enter values"
                        removable="true">
                    </ms-chips>
              </div>
        `;

    const cardElement = card;
    setTimeout(() => {
      const chips = cardElement.querySelector("#chips-id");
      chips.value = ["Chips 1", "Chips 2", "Chips 3"];
      chips.addEventListener("changeEvent", (e) => {
        console.log("Chips changed:", e.detail);
        chips.value = e.detail;
      });
    }, 0);

    return card;
  }
}

export default ChipsComponent;
