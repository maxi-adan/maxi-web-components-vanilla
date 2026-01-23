class MessagesComponent {
    static render() {
        const card = document.createElement("div");
        card.className = "component-card";

        card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Message</h3>
                  <p class="component-description">Contextual messages for displaying different types of feedback with multiple variants</p>
              </div>
              <div class="component-preview" style="padding: 0; width: 100%;">
                <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
                        <ms-message variant="info">Transaction pending verification</ms-message>
                        <ms-message variant="success">Payment processed successfully</ms-message>
                        <ms-message variant="warning">Account balance is below minimum threshold</ms-message>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;">
                        <ms-message variant="danger">Transaction failed due to insufficient funds</ms-message>
                        <ms-message variant="secondary">Account information updated</ms-message>
                    </div>
                </div>
              </div>
          `;

        return card;
    }
}

export default MessagesComponent;
