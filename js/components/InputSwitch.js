/**
 * Input Switch Component
 * Toggle switch for boolean values
 */
class InputSwitchComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';
        
        card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Input Switch</h3>
                <p class="component-description">Toggle switch for boolean values</p>
            </div>
            <div class="component-preview">
                <ms-input-switch id="input-id"></ms-input-switch>
            </div>
        `;
        
        // Agregar funcionalidad al switch
        setTimeout(() => {
            const switchInput = card.querySelector('#input-id');
            switchInput.checked = false;
            switchInput.addEventListener('change', (e) => {
                console.log('Switch toggled:', e.target.checked);
            });
        }, 0);
        
        return card;
    }
}

export default InputSwitchComponent;
