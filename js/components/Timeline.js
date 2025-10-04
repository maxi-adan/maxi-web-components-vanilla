class TimelineComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card card-component-wrapper";

    card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Timeline</h3>
                  <p class="component-description">Vertical timeline for events and progress</p>
              </div>
              <div class="component-preview">
                <ms-timeline id="timeline-id">
                    <!-- Los eventos se insertarán dinámicamente con JavaScript -->
                </ms-timeline>
              </div>
        `;

    const cardElement = card;
    setTimeout(() => {
      const timeline = cardElement.querySelector("#timeline-id");

      const events = [
        {
          date: "04/08/2024 - 09:37 PM",
          status: "Delivered",
          severity: "success",
        },
        {
          date: "03/08/2024 - 10:54 AM",
          status: "In transit",
          severity: "info",
        },
        {
          date: "02/08/2024 - 06:21 AM",
          status: "Pending",
          severity: "warning",
        },
        {
          date: "01/08/2024 - 11:31 AM",
          status: "Undelivered",
          severity: "danger",
        },
      ];

      timeline.events = events;

      events.forEach((item, i) => {
        // Crear el contenedor del evento
        const eventDiv = document.createElement("div");
        eventDiv.setAttribute("slot", `event-${i}`);

        // Crear el elemento de fecha
        const dateP = document.createElement("p");
        dateP.className = "ms-timeline-content-date";
        dateP.textContent = item.date;

        // Crear el elemento de estado
        const statusP = document.createElement("p");
        statusP.className = "ms-timeline-content-status";

        const statusLabel = document.createElement("b");
        statusLabel.textContent = "Order status: ";

        // Crear el badge
        const badge = document.createElement("ms-badge");
        badge.setAttribute("value", item.status);
        badge.setAttribute("severity", item.severity);

        // Ensamblar los elementos
        statusP.appendChild(statusLabel);
        statusP.appendChild(badge);

        eventDiv.appendChild(dateP);
        eventDiv.appendChild(statusP);

        // Agregar el evento al timeline
        timeline.appendChild(eventDiv);
      });
    }, 0);

    return card;
  }
}

export default TimelineComponent;
