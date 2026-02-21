class SelectButtonComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    const options = [
      { label: "Option 1", value: "opt1" },
      { label: "Option 2", value: "opt2" },
      { label: "Option 3", value: "opt3" }
    ];

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Select Button</h3>
                  <p class="component-description">Group of buttons for single selection</p>
              </div>
              <div class="component-preview">
                  <div style="width: 100%;">
                      <ms-select-button id="single-select"></ms-select-button>
                  </div>
              </div>
          `;

    setTimeout(() => {
        const single = card.querySelector('#single-select');
        if (single) single.options = options;
        single.value = 'opt1';
    }, 0);

    return card;
  }
}

export default SelectButtonComponent;
