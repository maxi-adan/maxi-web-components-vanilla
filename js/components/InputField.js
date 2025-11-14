/**
 * Input Field Component
 * Text input with validation and styling options
 */
class InputFieldComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';
        
        card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Input Field</h3>
                <p class="component-description">Text input with validation and styling options</p>
            </div>
            <div class="component-preview">
                <ms-input-field label="Input Field" style="width: 100%;" id="input-id"></ms-input-field>
            </div>
        `;

        setTimeout(() => {
            const input = card.querySelector('#input-id');
            input.addEventListener('change', (e) => {
                console.log('Input changed:', e.target.value);
            });
        }, 0);
        
        return card;
    }
}

export default InputFieldComponent;
