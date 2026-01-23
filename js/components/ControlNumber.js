class ControlNumberComponent {
    static render() {
        const card = document.createElement("div");
        card.className = "component-card";

        card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Control Number</h3>
                  <p class="component-description">Numeric control input for managing numeric values</p>
              </div>
              <div class="component-preview">
                  <ms-control-number id="control-number-id"></ms-control-number>
              </div>
          `;

        setTimeout(() => {
            const controlNumber = document.getElementById("control-number-id");

            controlNumber.label = "Control Number";
        }, 0);

        return card;
    }
}

export default ControlNumberComponent;
