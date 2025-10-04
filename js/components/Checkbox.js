/**
 * Checkbox Component
 * Checkbox for multiple selections
 */
class CheckboxComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';
        
        card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Checkbox</h3>
                <p class="component-description">Checkbox for multiple selections</p>
            </div>
            <div class="component-preview">
            <ms-checkbox label="Option 1"></ms-checkbox>
            </div>
        `;
        
        // Agregar funcionalidad a los checkboxes
        const cardElement = card;
        setTimeout(() => {
            const checkboxInputs = cardElement.querySelectorAll('.checkbox-input');
            checkboxInputs.forEach(checkbox => {
                checkbox.addEventListener('change', (e) => {
                    console.log('Checkbox toggled:', e.target.value, e.target.checked);
                });
            });
        }, 0);
        
        return card;
    }
}

export default CheckboxComponent;
