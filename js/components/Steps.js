class StepsComponent {
    static render() {
        const card = document.createElement("div");
        card.className = "component-card";

        card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Steps</h3>
                  <p class="component-description">Step-by-step navigation component - Click on each step to navigate</p>
              </div>
              <div class="component-preview" style="padding: 0; width: 100%;">
                  <ms-steps id="steps-id" style="width: 100%;"></ms-steps>
              </div>
          `;

        setTimeout(() => {
            const steps = document.getElementById("steps-id");

            steps.readonly = false;
            steps.steps = [
                { label: 'Account Verification' },
                { label: 'Document Upload' },
                { label: 'Payment Setup' },
            ];
        }, 0);

        return card;
    }
}

export default StepsComponent;
