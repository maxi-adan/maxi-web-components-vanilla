/**
 * Input Radio Component
 * Radio button for single selection
 */
class InputRadioComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';
        
        card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Input Radio</h3>
                <p class="component-description">Radio button for single selection</p>
            </div>
            <div class="component-preview">
                            <ms-radio
                id="yesId"
                name="decision"
                value="yes"
                [checked]="selectedValue === 'yes'"
                label="Yes"
                (radioChange)="handleRadioChange($event)"
                ></ms-radio>
                <ms-radio
                id="noId"
                name="decision"
                value="no"
                [checked]="selectedValue === 'no'"
                label="No"
                (radioChange)="handleRadioChange($event)"
                ></ms-radio>
            </div>
        `;       
        

        setTimeout(() => {
            const radioInputs = card.querySelectorAll('.radio-input');
            radioInputs.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    console.log('Radio selected:', e.target.value);
                });
            });
        }, 0);
        
        return card;
    }
}

export default InputRadioComponent;
