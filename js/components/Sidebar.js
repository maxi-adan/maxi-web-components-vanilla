class SidebarComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';
        
        card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Sidebar</h3>
                <p class="component-description">Collapsible navigation sidebar</p>
            </div>
            <div class="component-preview">
                <ms-button
                label="Show"
                id="show-sidebar"
                variant="secondary"></ms-button>
                
                <ms-sidebar
                id="sidebar"
                content="true">
                    <div style="padding: 20px;" slot="content">
                        <h2>Custom Header</h2>
                        <p style="margin-bottom: 20px;">Custom Content</p>
                        <ms-button
                        id="close-sidebar"
                        label="Close"                        
                        variant="success"
                        />
                    </div>
                </ms-sidebar>
            </div>
        `;
        
        const cardElement = card;
        setTimeout(() => {
            const buttonShow = cardElement.querySelector('#show-sidebar');
            const sidebar = cardElement.querySelector('#sidebar');
            const buttonClose = cardElement.querySelector('#close-sidebar');
            sidebar.addEventListener('hide', () => {
                sidebar.visible = false;
            });
            buttonShow.addEventListener('click', () => {
                sidebar.visible = true;
            });
            buttonClose.addEventListener('click', () => {
                sidebar.visible = false;
            });
        }, 0);
        
        return card;
    }
}

export default SidebarComponent;
