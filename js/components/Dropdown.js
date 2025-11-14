/**
 * Dropdown Component
 * Select dropdown with search functionality
 */
class DropdownComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';
        
        card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Dropdown</h3>
                <p class="component-description">Select dropdown with search functionality</p>
            </div>
            <div class="component-preview">
                            <ms-dropdown
                            label="Dropdown"
                            style="width: 100%;"
                            id="dropdown"
                            placeholder="Select an option"></ms-dropdown>
            </div>
        `;
        
        const cardElement = card;
        setTimeout(() => {
            const select = cardElement.querySelector('#dropdown');
           
            const options = [
                {
                  label: "USA",
                  value: "1",
                  icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png",
                },
                {
                  label: "México",
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
            select.options = options;

            select.filter = true;
            
            select.addEventListener('selected', (e) => {
                console.log('Dropdown selected:', e.detail.value);

                select.value = e.detail.value;
            });
        }, 0);
        
        return card;
    }
}

export default DropdownComponent;
