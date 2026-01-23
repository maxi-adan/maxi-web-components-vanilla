class FieldSetComponent {
    static render() {
        const card = document.createElement("div");
        card.className = "component-card";

        card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Fieldset</h3>
                  <p class="component-description">Grouped form fields with collapsible legend for organizing related inputs</p>
              </div>
              <div class="component-preview">
                  <ms-fieldset id="fieldset-id" style="width: 100%;">
                        <div slot="legend" style="display: flex; gap: 8px; align-items: center;">
                            <span>💳</span>
                            <strong>Payment Details</strong>
                        </div>

                        <div style="padding: 10px;">
                            <p>Account Number: **** **** **** 4532</p>
                            <p>Bank: Financial Services Bank</p>
                            <p>Transaction Limit: $10,000.00</p>
                        </div>
                    </ms-fieldset>
              </div>
          `;

        setTimeout(() => {
            const fieldset = document.getElementById("fieldset-id");

            fieldset.toggleable = true;
        }, 0);

        return card;
    }
}

export default FieldSetComponent;
