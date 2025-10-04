class TabsComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';
        
        card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Tabs</h3>
                <p class="component-description">Tabbed interface for content organization</p>
            </div>
            <div class="component-preview">
            <ms-tabs hierarchy="primary">
            <div label="Tab 1" slot="tab-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <div label="Tab 2" slot="tab-1">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
                ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Consectetur, adipisci velit, sed quia non numquam eius modi.
            </div>
            <div label="Tab 3" slot="tab-2">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas
                molestias excepturi sint occaecati cupiditate non provident, similique sunt
                in culpa qui officia deserunt mollitia animi, id est laborum et dolorum
                fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
            </div>
            </ms-tabs>
            </div>
        `;
        
        const cardElement = card;
        setTimeout(() => {
            const tabs = cardElement.querySelector('ms-tabs');

            tabs.activeTab = 0;
         

        }, 0);
        
        return card;
    }
}

export default TabsComponent;