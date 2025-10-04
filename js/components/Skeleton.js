class SkeletonComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card card-component-wrapper";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Skeleton</h3>
                  <p class="component-description">Placeholder content while loading - Animated loading placeholders</p>
              </div>
              <div class="component-preview">
                  <div class="skeleton-showcase">
                    <ms-skeleton class="mb-skeleton"></ms-skeleton> 
                    <ms-skeleton class="mb-skeleton" width="10rem"></ms-skeleton>
                    <ms-skeleton class="mb-skeleton" width="5rem"></ms-skeleton>   
                    <ms-skeleton class="mb-skeleton" height="2rem"></ms-skeleton>
                    <ms-skeleton class="mb-skeleton" width="10rem" height="4rem"></ms-skeleton>
                </div>
              </div>
        `;

    return card;
  }
}

export default SkeletonComponent;
