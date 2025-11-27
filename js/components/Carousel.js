/**
 * Carousel Component
 * Interactive carousel for displaying multiple items with navigation
 */
class CarouselComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Carousel</h3>
                <p class="component-description">Interactive carousel for displaying multiple items with navigation</p>
            </div>
            <div class="component-preview" style="padding: 0; width: 100%;">
                <ms-carousel id="carousel-id" style="width: 100%;"></ms-carousel>              
            </div>
        `;

    setTimeout(() => {
      const carousel = document.getElementById("carousel-id");

      // Carousel items data
      const carouselItems = [
        {
          svg: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#E3F2FD;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#BBDEFB;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad1)" />
            <circle cx="200" cy="100" r="50" fill="#2196F3" opacity="0.2" />
            <circle cx="200" cy="100" r="35" fill="#2196F3" opacity="0.3" />
            <rect x="150" y="80" width="100" height="40" rx="8" fill="#2196F3" opacity="0.4" />
            <text x="200" y="180" font-size="24" fill="#1976D2" text-anchor="middle" font-weight="600">Digital Account</text>
            <text x="200" y="210" font-size="16" fill="#64B5F6" text-anchor="middle">Premium Banking</text>
          </svg>`,
          title: "Premium Digital Account",
          description:
            "Manage your finances with our digital account with no fees and exclusive benefits",
          price: "0% fees",
          rating: 4.9,
          badge: "Popular",
        },
        {
          svg: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#F3E5F5;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#E1BEE7;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad2)" />
            <path d="M 100 140 L 150 100 L 200 120 L 250 80 L 300 110 L 300 140 L 100 140 Z" fill="#9C27B0" opacity="0.3" />
            <path d="M 100 160 L 150 120 L 200 140 L 250 100 L 300 130 L 300 160 L 100 160 Z" fill="#9C27B0" opacity="0.2" />
            <circle cx="200" cy="120" r="8" fill="#9C27B0" />
            <text x="200" y="200" font-size="24" fill="#7B1FA2" text-anchor="middle" font-weight="600">Smart Investments</text>
            <text x="200" y="230" font-size="16" fill="#BA68C8" text-anchor="middle">AI-Powered</text>
          </svg>`,
          title: "Smart Investments",
          description:
            "Automated investment platform with AI algorithms to maximize your returns",
          price: "From 1% annual",
          rating: 4.8,
          badge: "New",
        },
        {
          svg: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FFF3E0;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#FFE0B2;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad3)" />
            <rect x="120" y="80" width="160" height="100" rx="12" fill="#FF9800" opacity="0.3" />
            <rect x="140" y="100" width="120" height="60" rx="8" fill="#FF9800" opacity="0.4" />
            <circle cx="200" cy="130" r="15" fill="#FF9800" />
            <text x="200" y="210" font-size="24" fill="#F57C00" text-anchor="middle" font-weight="600">Express Loans</text>
            <text x="200" y="240" font-size="16" fill="#FFB74D" text-anchor="middle">Fast Approval</text>
          </svg>`,
          title: "Express Loans",
          description:
            "Get personal loans in minutes with instant approval and competitive rates",
          price: "Rate from 8.5%",
          rating: 4.7,
          badge: "Fast",
        },
        {
          svg: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#E8EAF6;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#C5CAE9;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad4)" />
            <rect x="130" y="90" width="140" height="90" rx="12" fill="#3F51B5" opacity="0.3" />
            <rect x="145" y="105" width="110" height="60" rx="8" fill="#3F51B5" opacity="0.4" />
            <circle cx="200" cy="135" r="20" fill="#3F51B5" opacity="0.5" />
            <text x="200" y="210" font-size="24" fill="#303F9F" text-anchor="middle" font-weight="600">Black Credit Card</text>
            <text x="200" y="240" font-size="16" fill="#7986CB" text-anchor="middle">Premium Benefits</text>
          </svg>`,
          title: "Black Credit Card",
          description:
            "Premium card with 5% cashback and access to VIP airport lounges",
          price: "No annual fee",
          rating: 4.9,
          badge: "Exclusive",
        },
        {
          svg: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad5" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#E0F2F1;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#B2DFDB;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad5)" />
            <path d="M 150 100 L 200 80 L 250 100 L 250 150 L 200 170 L 150 150 Z" fill="#009688" opacity="0.3" />
            <circle cx="200" cy="125" r="30" fill="#009688" opacity="0.2" />
            <circle cx="200" cy="125" r="20" fill="#009688" opacity="0.3" />
            <text x="200" y="210" font-size="24" fill="#00695C" text-anchor="middle" font-weight="600">Digital Insurance</text>
            <text x="200" y="240" font-size="16" fill="#4DB6AC" text-anchor="middle">Full Protection</text>
          </svg>`,
          title: "Digital Insurance",
          description:
            "Protect what matters most with personalized insurance and 100% digital management",
          price: "From $15/month",
          rating: 4.6,
          badge: "Flexible",
        },
        {
          svg: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="grad6" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#FCE4EC;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#F8BBD0;stop-opacity:1" />
              </linearGradient>
            </defs>
            <rect width="400" height="280" fill="url(#grad6)" />
            <rect x="140" y="90" width="120" height="80" rx="12" fill="#E91E63" opacity="0.3" />
            <circle cx="200" cy="130" r="25" fill="#E91E63" opacity="0.4" />
            <circle cx="180" cy="120" r="8" fill="#E91E63" />
            <circle cx="220" cy="120" r="8" fill="#E91E63" />
            <circle cx="200" cy="140" r="8" fill="#E91E63" />
            <text x="200" y="210" font-size="24" fill="#C2185B" text-anchor="middle" font-weight="600">Digital Wallet</text>
            <text x="200" y="240" font-size="16" fill="#F48FB1" text-anchor="middle">Instant Payments</text>
          </svg>`,
          title: "Digital Wallet",
          description:
            "Send and receive money instantly, pay bills and manage your payments from one place",
          price: "Free",
          rating: 4.8,
          badge: "Essential",
        },
      ];

      // Helper functions
      const getFilledStars = (rating) => {
        return "★".repeat(Math.floor(rating));
      };

      const getEmptyStars = (rating) => {
        return "☆".repeat(5 - Math.floor(rating));
      };

      // Configure carousel
      carousel.value = carouselItems;
      carousel.numVisible = 3;
      carousel.numScroll = 1;
      carousel.infinite = false;
      carousel.autoplay = false;
      carousel.showNavigators = true;
      carousel.showIndicators = true;
      carousel.responsiveOptions = [
        {
          breakpoint: "1024",
          numVisible: 3,
          numScroll: 1,
        },
        {
          breakpoint: "768",
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: "560",
          numVisible: 1,
          numScroll: 1,
        },
      ];

      // Create product cards and append to carousel
      carouselItems.forEach((product, index) => {
        const productCard = document.createElement("div");
        productCard.setAttribute("slot", `item-carousel-${index}`);
        productCard.className = "product-card";

        // Badge
        if (product.badge) {
          const badge = document.createElement("span");
          badge.className = "product-badge";
          badge.textContent = product.badge;
          productCard.appendChild(badge);
        }

        // Image container with SVG
        const imageContainer = document.createElement("div");
        imageContainer.className = "product-image";
        imageContainer.innerHTML = product.svg;
        productCard.appendChild(imageContainer);

        // Title
        const title = document.createElement("h3");
        title.className = "product-title";
        title.textContent = product.title;
        productCard.appendChild(title);

        // Description
        const description = document.createElement("p");
        description.className = "product-description";
        description.textContent = product.description;
        productCard.appendChild(description);

        // Footer
        const footer = document.createElement("div");
        footer.className = "product-footer";

        const price = document.createElement("span");
        price.className = "product-price";
        price.textContent = product.price;
        footer.appendChild(price);

        const rating = document.createElement("div");
        rating.className = "product-rating";
        rating.textContent =
          getFilledStars(product.rating) + getEmptyStars(product.rating);
        footer.appendChild(rating);

        productCard.appendChild(footer);

        // Button
        const button = document.createElement("button");
        button.className = "product-button";
        button.textContent = "Learn More";
        productCard.appendChild(button);

        carousel.appendChild(productCard);
      });
    }, 0);

    return card;
  }
}

export default CarouselComponent;
