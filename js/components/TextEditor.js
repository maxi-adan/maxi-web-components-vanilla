class TextEditorComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card full-width-card";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Text Editor</h3>
                  <p class="component-description">WYSIWYG editor with rich text capabilities</p>
              </div>
              <div class="component-preview">
                  <div style="width: 100%;">
                      <ms-text-editor 
                          placeholder="Write something...">
                      </ms-text-editor>
                  </div>
              </div>
          `;

    return card;
  }
}

export default TextEditorComponent;
