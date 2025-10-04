/**
 * Autocomplete Component
 * Input with suggestions and filtering
 */
class AutocompleteComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Autocomplete</h3>
                <p class="component-description">Input with suggestions and filtering</p>
            </div>
            <div class="component-preview">
                <div class="autocomplete-container">
                     <ms-autocomplete
                        option-group="false"
                        id="autocomplete"
                        placeholder="Type to search..."
                        show-icon="true"
                        ></ms-autocomplete>
                </div>
            </div>
        `;

        const basicSuggestions = [
            {
              label: "USA",
              value: "1",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png",
            },
            {
              label: "Mexico",
              value: "2",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png",
            },
            {
              label: "Colombia",
              value: "3",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/200px-Flag_of_Colombia.svg.png",
            },
            {
              label: "Canada",
              value: "4",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/800px-Flag_of_Canada_%28Pantone%29.svg.png",
            },
            {
              label: "Venezuela",
              value: "5",
              icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Flag_of_Venezuela.svg/255px-Flag_of_Venezuela.svg.png",
            },
          ];

          const cardElement = card;

          setTimeout(() => {
            
          const autocomplete = cardElement.querySelector("#autocomplete");

          const fakeAsyncFunction = (structure) => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(structure);
              }, 0);
            });
          };
    
          autocomplete.addEventListener("selected", (e) => {
            console.log(e.detail);
            autocomplete.value = e.detail.label;
          });
          autocomplete.addEventListener("completeMethod", async (e) => {
            const result = await fakeAsyncFunction(basicSuggestions);
    
            e.detail.resolve(result);
            autocomplete.value = result.value;
          });
        }, 0);
          
    return card;
    }
}

export default AutocompleteComponent;
