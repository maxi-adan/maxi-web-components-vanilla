/**
 * Multi Select Component
 * Multiple selection dropdown with tags
 */
class MultiSelectComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';
        
        card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Multi Select</h3>
                <p class="component-description">Multiple selection dropdown with tags</p>
            </div>
            <div class="component-preview">
              <ms-multiselect
              label="Multi Select"
              style="width: 100%;"
                placeholder="Select options"></ms-multiselect>
            </div>
        `;
        
        // Agregar funcionalidad al multiselect
        const cardElement = card;
        setTimeout(() => {
            const input = cardElement.querySelector('ms-multiselect');

            const selectedItems = [
                { label: 'New York', value: '1' },
                { label: 'CDMX', value: '3' }
              ];
              const options = [
                { label: 'New York', value: '1' },
                { label: 'San Francisco', value: '2' },
                { label: 'CDMX', value: '3' },
                { label: 'Guanajuato', value: '4' },
              ];

              input.options = options;
              input.value = selectedItems;
         

        }, 0);
        
        return card;
    }
}

export default MultiSelectComponent;
