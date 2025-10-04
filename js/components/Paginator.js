class PaginatorComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';

        card.innerHTML = `
            <div class="component-header">              
            </div>
            <div class="component-preview">
                <ms-paginator id="paginator"></ms-paginator>
            </div>
        `;
        
        const cardElement = card;
        setTimeout(() => {
            const paginator = cardElement.querySelector('#paginator')
            paginator.totalRecords = 50;
            paginator.currentPage = 0;
            paginator.rows= 20;
            paginator.rowsPerPageOptions =  [
                { label: '10', value: 10 },
                { label: '20', value: 20 },
                { label: '30', value: 30 }
              ];
            paginator.addEventListener('pageChange', (e) => {
                const { currentPage, rows } = e.detail;
                console.log('Paginator changed:', currentPage, rows);
                paginator.currentPage = currentPage;
                paginator.rows = rows;
            });
        }, 0);

        return card;
    }
}

export default PaginatorComponent;