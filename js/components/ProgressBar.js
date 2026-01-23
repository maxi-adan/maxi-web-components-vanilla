class ProgressBarComponent {
    static render() {
        const card = document.createElement("div");
        card.className = "component-card";

        card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Progress Bar</h3>
                  <p class="component-description">Progress indicator for showing completion status or loading state</p>
              </div>
              <div class="component-preview" style="padding: 0; width: 100%;">
                  <div style="display: flex; flex-direction: column; gap: 16px; width: 100%;">
                    <div>
                        <p style="margin-bottom: 8px; font-size: 0.9rem; color: #495057;">Loan Application Progress: 75%</p>
                        <ms-progress-bar id="progress-bar-id-1"></ms-progress-bar>
                    </div>
                    <div>
                        <p style="margin-bottom: 8px; font-size: 0.9rem; color: #495057;">Processing Transaction...</p>
                        <ms-progress-bar id="progress-bar-id-2"></ms-progress-bar>
                    </div>
                </div>
              </div>
          `;

        setTimeout(() => {
            const progressBar = document.getElementById("progress-bar-id-1");
            progressBar.value = 75;
            
            const progressBar2 = document.getElementById("progress-bar-id-2");
            progressBar2.mode = "indeterminate";
        }, 0);

        return card;
    }
}

export default ProgressBarComponent;
