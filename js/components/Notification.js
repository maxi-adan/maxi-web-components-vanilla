class NotificationComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card card-component-wrapper";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Notification</h3>
                  <p class="component-description">Toast notifications for user feedback - Click on elements to see them in action</p>
              </div>
              <div class="component-preview">
                <div style="display: flex; gap: 10px;">
                  <ms-badge style="cursor: pointer;" value="Alert" severity="danger" data-severity="alert" class="badge-notification"></ms-badge>
                  <ms-badge style="cursor: pointer;" value="Warning" severity="warning" data-severity="warning" class="badge-notification"></ms-badge>
                   <ms-badge style="cursor: pointer;" value="Success" severity="success" data-severity="success" class="badge-notification"></ms-badge>
                  <ms-badge style="cursor: pointer;" value="Information" severity="info" data-severity="info" class="badge-notification"></ms-badge>
                </div>

                <ms-notification />              
              </div>
        `;

    const LIFETIME = 3000;

    const CONTENT = {
      alert: {
        severity: "alert",
        summary: "Alert",
        detail: "The action could not be processed",
        position: "bottom-center",
      },
      info: {
        severity: "info",
        summary: "Info",
        detail: "The action was successful",
        position: "top-right",
      },
      success: {
        severity: "success",
        summary: "Success",
        detail: "Action was carried out successfully",
        position: "top-left",
      },
      warning: {
        severity: "warning",
        summary: "Warning",
        detail: "This action cannot be undone",
        position: "bottom-right",
      },
    };

    const cardElement = card;
    setTimeout(() => {
      const notification = cardElement.querySelector("ms-notification");
      const badgeNotification = cardElement.querySelectorAll(
        ".badge-notification"
      );
      notification.life = LIFETIME;
      notification.visible = false;

      badgeNotification.forEach((badge) => {
        if (!badge.hasAttribute("data-listener-added")) {
          badge.setAttribute("data-listener-added", "true");

          badge.addEventListener("click", (event) => {
            event.stopPropagation();

            const severity = badge.getAttribute("data-severity");

            const currentContent = CONTENT[severity];

            notification.visible = true;
            notification.content = currentContent;
            notification.position = currentContent.position;
            notification.severity = currentContent.severity;
            notification.summary = currentContent.summary;
            notification.detail = currentContent.detail;
          });
        }
      });
    }, 0);

    return card;
  }
}

export default NotificationComponent;
