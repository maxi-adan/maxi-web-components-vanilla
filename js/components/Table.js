class TableComponent {
    static render() {
        const card = document.createElement('div');
        card.className = 'component-card';

        card.innerHTML = `
            <ms-table
                id="id-table"
                size="small"
                paginator="true"
                selection-row="true"
                expandable-row="true"
                show-footer="true"
                data-key="id"
                is-framework="false"
            ></ms-table>
        `;


          const cardElement = card;

          setTimeout(() => {
            
          
            const table = cardElement.querySelector("#id-table");
      
            const randomNames = [
              "John",
              "Jane",
              "Alice",
              "Bob",
              "Charlie",
              "Diana",
              "Ethan",
              "Fiona",
              "George",
              "Hannah",
              "Ian",
              "Julia",
              "Kevin",
              "Laura",
              "Michael",
              "Nina",
            ];
            const randomLastNames = [
              "Smith",
              "Johnson",
              "Brown",
              "Taylor",
              "Anderson",
              "Thomas",
              "Jackson",
              "White",
              "Harris",
              "Martin",
              "Thompson",
              "Garcia",
              "Martinez",
              "Robinson",
              "Clark",
              "Lewis",
            ];
            const randomStatus = ["Active", "Inactive"];
            const randomAmount = [100, 200, 300, 500, 800];
            const randomAmountToPay = [10, 15, 20, 30, 50, 80, 90, 95, 96];
            function getRandomElement(arr) {
              return arr[Math.floor(Math.random() * arr.length)];
            }
      
            const data = Array.from({ length: 16 }, (_, index) => ({
              id: index + 1,
              name: getRandomElement(randomNames),
              lastName: getRandomElement(randomLastNames),
              status: getRandomElement(randomStatus),
              age: Math.floor(Math.random() * 60) + 18,
              amount: getRandomElement(randomAmount),
            }));
      
            const columns = [
              { field: "id", header: "ID", width: "40px", sortable: true },
              { field: "name", header: "Name", width: "150px", sortable: true },
              {
                field: "lastName",
                header: "Last Name",
                width: "150px",
                sortable: true,
              },
              { field: "age", header: "Age", width: "150px", sortable: true },
              {
                field: "status",
                header: "Status",
                render: (row) => {
                  const badge = document.createElement("ms-badge");
                  badge.value = row.status;
                  badge.severity = row.status === "Active" ? "success" : "danger";
      
                  return [badge];
                },
                footer: "Total",
                width: "50px",
                align: "center",
                sortable: true,
              },
              {
                field: "amount",
                header: "Amount",
                align: "right",
                width: "150px",
                footer: data.slice(0, 5).reduce((acc, row) => acc + row.amount, 0),
                sortable: true,
              },
              {
                header: "Actions",
                field: "actions",
                render: (row) => {
                  const btnEdit = document.createElement("ms-button");
                  btnEdit.label = "Edit";
                  btnEdit.onclick = (e) => handleClick(e, row, "Edit");
                  btnEdit.variant = "primary";
                  btnEdit.classList.add("sb-button", "ms-table-actions");
      
                  const btnDelete = document.createElement("ms-button");
                  btnDelete.label = "Delete";
                  btnDelete.onclick = (e) => handleClick(e, row, "Delete");
                  btnDelete.variant = "danger";
                  btnDelete.classList.add("sb-button", "ms-table-actions");
      
                  const div = document.createElement("div");
                  div.classList.add("btns-table");
                  div.appendChild(btnEdit);
                  div.appendChild(btnDelete);
      
                  return [div];
                },
                width: "150px",
                align: "center",
              },
            ];
      
            function handleClick(e, row, action) {
              e.stopPropagation();
              console.log({ row, action });
            }
      
            console.log({ data, columns });
      
            table.columns = columns;
            table.data = data;
            table.rowsPerPage = 5;
            table.totalRecords = data.length;
      
            table.addEventListener("rowClick", (row) => {
              console.log("rowclick", row.detail);
            });
            table.addEventListener("paginatorChange", (row) => {
              console.log("paginatorChange", row.detail);
            });
            table.addEventListener("sort", (row) => {
              console.log("sort", row.detail);
            });
            table.addEventListener("selection", (row) => {
              console.log("selection", row.detail);
            });
      
            table.size = "normal";
      
            table.addEventListener("expand", (row) => {
              console.log({ id: row.detail });
      
              const columns = [
                { header: "Date", field: "date" },
                { header: "Description", field: "description" },
                { header: "Payment Method", field: "paymentMethod" },
                { header: "Currency", field: "currency", align: "center" },
                { header: "Amount to pay", field: "amountToPay", align: "right" },
                {
                  header: "Status",
                  field: "status",
                  align: "center",
                  render: (row) => {
                    const badge = document.createElement("ms-badge");
                    badge.value = row.status;
                    badge.severity = row.status === "pending" ? "warning" : "success";
      
                    return [badge];
                  },
                },
              ];
              const data = [
                {
                  date: "12/22/2024",
                  amountToPay: getRandomElement(randomAmountToPay),
                  description: "Monthly subscription",
                  currency: "USD",
                  status: "pending",
                  paymentMethod: "creditCard",
                  transactionId: "TXN12345",
                },
                {
                  date: "12/28/2024",
                  amountToPay: getRandomElement(randomAmountToPay),
                  description: "Utility bill",
                  currency: "USD",
                  status: "completed",
                  paymentMethod: "bankTransfer",
                  transactionId: "TXN12346",
                },
              ];
      
              const createContent = document.createElement("ms-table");
              createContent.columns = columns;
              createContent.data = [...data].sort(() => Math.random() - 0.5);
              createContent.size = "small";
              createContent.isFramework = false;
              createContent.classList.add("nested-table");
      
              table.nestedTableContent = createContent;
            });
          
        }, 0);
          
    return card;
    }


}

export default TableComponent;