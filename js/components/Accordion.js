class CascadeMenuComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card card-component-wrapper";

    card.innerHTML = `
                    <div class="component-header">
                        <h3 class="component-title">Accordion</h3>
                        <p class="component-description">Collapsible content sections for organized information display.</p>
                     </div>
                    <div style="background:white;" class="component-preview">
                      <ms-accordion multiple="true" style="width: 100%;">
                            <div slot="header-0"><span>Tab One</span></div>
                            <div slot="content-0">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>

                            <div slot="header-1" style="display: flex; align-items: center; gap: 0.5rem">                            
                                <img
                                  width="24"
                                  height="24"
                                  alt="avatar"
                                  src="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                                  data-pc-section="image"
                                />
                                <span className="accordion-custom-header-content-text">Amy Elsner</span>
                                <span className="accordion-custom-badge" data-pc-name="badge" data-pc-section="root" style="background-color: #4CAF50; color: white; padding: 4px 8px; border-radius: 12px; font-size: 12px; font-weight: bold;margin-left: auto;">
                                  3
                                </span>
                          
                             </div>
                            <div slot="content-1">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>

                            <div slot="header-2"><span>Tab Three</span></div>
                            <div slot="content-2">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </div>
                          </ms-accordion>
                    </div>
        `;

    const cardElement = card;
    setTimeout(() => {
      const accordion = cardElement.querySelector("ms-accordion");

      accordion.addEventListener("tabChange", (e) => {
        const { index, isOpen, activeIndexes } = e.detail;
        console.log(`Tab ${index} ${isOpen ? "opened" : "closed"}`);
        console.log("Tabs active:", activeIndexes);
      });

      accordion.addEventListener("tabOpen", (e) => {
        const { index, activeIndexes } = e.detail;
        console.log(`Tab ${index} opened!`);
        console.log("Tabs active:", activeIndexes);
      });

      accordion.addEventListener("tabClose", (e) => {
        const { index, activeIndexes } = e.detail;
        console.log(`Tab ${index} closed!`);
        console.log("Tabs active:", activeIndexes);
      });
    }, 0);

    return card;
  }
}

export default CascadeMenuComponent;
