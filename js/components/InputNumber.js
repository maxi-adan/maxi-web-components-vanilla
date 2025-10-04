/**
 * Input Number Component
 * Numeric input with increment/decrement controls
 */
class InputNumberComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';
        
        card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Input Number</h3>
                <p class="component-description">Numeric input with increment/decrement controls</p>
            </div>
            <div class="component-preview">
               <ms-input-number style="width: 100%;" id="input-id"></ms-input-number>
            </div>
        `;
        
         setTimeout(() => {
            const input = card.querySelector('#input-id');
            input.value = 151351;
            input.minFractionDigits = 2;
            input.mode = 'currency';
            input.addEventListener('change', (e) => {
                console.log('Input changed:', e.target.value);
            });
        }, 0);
        
        return card;
    }
}

export default InputNumberComponent;
