class DialogComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card card-component-wrapper";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Dialog</h3>
                  <p class="component-description">Modal dialogs for forms and confirmations</p>
              </div>
              <div class="component-preview">
                 <ms-button label="Open dialog" variant="outline-primary" id="open-dialog"></ms-button>
                <ms-dialog
                style-component="width:30rem"
                show-footer="true"
                >
                <div slot="header">
                    <div style="display: flex; align-items: center; gap: 0.5rem">
                    <img
                        width="44"
                        src="https://static.vecteezy.com/system/resources/thumbnails/001/993/889/small_2x/beautiful-latin-woman-avatar-character-icon-free-vector.jpg"
                    />
                    <span>Dialog</span>
                    </div>
                </div>
                <p>
                    This is a pure HTML and CSS dialog box built with Stencil. You can
                    use the slot to include custom content.
                </p>

                <div slot="footer">
                    <ms-button label="Close" id="close-dialog" />
                </div>
                </ms-dialog>
              </div>
        `;

    const cardElement = card;
    setTimeout(() => {
      const openDialog = cardElement.querySelector("#open-dialog");
      const closeDialog = cardElement.querySelector("#close-dialog");
      const dialog = cardElement.querySelector("ms-dialog");
      openDialog.addEventListener("click", () => {
        dialog.visible = true;
      });
      closeDialog.addEventListener("click", () => {
        dialog.visible = false;
      });
    }, 0);

    return card;
  }
}

export default DialogComponent;
