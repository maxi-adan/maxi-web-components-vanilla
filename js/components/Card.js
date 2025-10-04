class CardComponent {
    static render() {
        const card = document.createElement("div");
        card.className = "component-card card-component-wrapper";

        card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Card</h3>
                  <p class="component-description">Content container with header, body, and footer</p>
              </div>
              <div class="component-preview card-preview">
                    <ms-card class="responsive-card">
                    <h1 slot="titleComponent">Card Title</h1>

                    <h2 slot="subTitle">Card Subtitle</h2>
                    <div slot="header" class="card-image-container">
                        <img
                        class="card-image"
                        alt="Card"
                        src="https://primefaces.org/cdn/primereact/images/usercard.png"
                        />
                    </div>
                    <p class="card-content-text">This is the basic card content.</p>

                    <div slot="footer" class="btn-card">
                        <ms-button label="Cancel" variant="danger"></ms-button>
                        <ms-button label="Accept" variant="success"></ms-button>
                    </div>
                    </ms-card>
              </div>
        `;

        return card;
    }
}

export default CardComponent;