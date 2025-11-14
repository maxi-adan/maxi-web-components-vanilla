class CalendarComponent {
    static render() {
      const card = document.createElement("div");
      card.className = "component-card";
  
      card.innerHTML = `
              <div class="component-header">
                  <h3 class="component-title">Calendar</h3>
                  <p class="component-description">Date picker with calendar interface</p>
              </div>
              <div class="component-preview">
                    <ms-calendar
                      label="Calendar"
                      style="width: 100%;"
                      show-icon="true"></ms-calendar>
              </div>
          `;
  
      const cardElement = card;
      setTimeout(() => {
        const input = cardElement.querySelector("ms-calendar");
           input.addEventListener("update", (event) => {
        const value = event.detail;
        console.log(value);
      });
      }, 0);
  
   
  
      return card;
    }
  }
  
  export default CalendarComponent;
  