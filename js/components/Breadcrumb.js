class BreadcrumbComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Breadcrumb</h3>
                <p class="component-description">Navigation breadcrumb trail showing current page location</p>
            </div>
            <div class="component-preview" style="padding: 0; width: 100%;">
                <ms-breadcrumb id="breadcrumb-id" style="width: 100%;"></ms-breadcrumb>
            </div>
        `;

    setTimeout(() => {
      const breadcrumb = document.getElementById("breadcrumb-id");

      const items = [
        { label: "Dashboard" },
        { label: "Portfolio" },
        { label: "Investment Accounts" },
        { label: "Transaction History" }
      ];
    
       const homeWithTemplate = { 
        template: "<span style='color: #043F8F; font-weight: bold;'>🏠 Home</span>"
      };

      breadcrumb.model = items;
      breadcrumb.home = homeWithTemplate;
    }, 0);

    return card;
  }
}

export default BreadcrumbComponent;
