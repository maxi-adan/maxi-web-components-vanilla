class MenubarComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Menubar</h3>
                <p class="component-description">Horizontal navigation menu</p>
            </div>
            <div class="component-preview" style="padding: 0; width: 100%;">
                <ms-menubar id="menubar" style="width: 100%;">
                    <img slot="start" src="./assets/maxi.svg" alt="Maxi Logo" />

                    <div slot="end" style="display: flex; gap: 20px;">
                        <img src="./assets/icons/translate.svg" alt="Translate" />
                        <img src="./assets/icons/notifications.svg" alt="Notifications" />
                        <img src="./assets/icons/settings.svg" alt="Settings" />
                    </div>
                </ms-menubar>
            </div>
            
        `;

    setTimeout(() => {
      const menubar = card.querySelector("#menubar");

      let selectedItem = null;

      const items = [
        {
          id: "1",
          label: "Dashboard",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>',
          action: (e) => {
            handleSelection(e);
          },
          menuData: [
            {
              id: "2",
              text: "Overview",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            {
              id: "3",
              text: "Analytics",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            { type: "divider" },
            {
              id: "4",
              text: "Reports",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
              children: [
                {
                  id: "5",
                  text: "Financial Report",
                  icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>',
                  action: (e) => {
                    handleSelection(e);
                  },
                },
                {
                  id: "6",
                  text: "Transaction Report",
                  icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',
                  action: (e) => {
                    handleSelection(e);
                  },
                },
                {
                  id: "7",
                  text: "Tax Report",
                  icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
                  action: (e) => {
                    handleSelection(e);
                  },
                },
              ],
            },
          ],
        },
        {
          id: "8",
          label: "Transactions",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',
          action: (e) => {
            handleSelection(e);
          },
          menuData: [
            {
              id: "9",
              text: "All Transactions",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            {
              id: "10",
              text: "Pending",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            {
              id: "11",
              text: "Completed",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            {
              id: "12",
              text: "Failed",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
          ],
        },
        {
          id: "13",
          label: "Accounts",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
          action: (e) => {
            handleSelection(e);
          },
          menuData: [
            {
              id: "14",
              text: "Checking",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            {
              id: "15",
              text: "Savings",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.83 7.5l-2.27-2.27c.07-.42.18-.81.32-1.15.11-.26.15-.56.09-.87-.13-.72-.83-1.22-1.57-1.21-1.59.24-3.6.98-4.95 2.33l-1.09 1.09c-.24.24-.44.46-.65.69-.18.18-.4.34-.66.45-.01 0-.03.01-.04.02-.27.1-.53.18-.76.26-.07.02-.14.05-.21.07-.23.07-.46.12-.68.16-.06.01-.11.03-.16.04-.55.07-1 .25-1.31.55-.14.13-.25.28-.32.42-.06.15-.09.3-.09.44 0 .15.05.31.14.46.18.3.49.6.9.89.77.56 1.89 1.03 3.18 1.22.37.05.74.08 1.12.08 2.5 0 4.5-.68 5.89-1.8.27-.22.5-.46.69-.72.24-.32.45-.66.64-1.01.02-.03.05-.05.07-.08.21-.4.4-.85.55-1.3.15-.45.26-.92.32-1.38v-.01c.01-.07.02-.14.02-.2-.01-.21-.07-.41-.15-.6zM12 9H9v2H7v2h2v2h2v-2h2v-2h-2V9z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            {
              id: "16",
              text: "Investment",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
          ],
        },
        {
          id: "17",
          label: "Payments",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',
          action: (e) => {
            handleSelection(e);
          },
          menuData: [
            {
              id: "18",
              text: "Send Money",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            {
              id: "19",
              text: "Request Payment",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            {
              id: "20",
              text: "Bill Pay",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
          ],
        },
        {
          id: "21",
          label: "Portfolio",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/></svg>',
          action: (e) => {
            handleSelection(e);
          },
        },
        {
          id: "22",
          label: "Settings",
          icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>',
          action: (e) => {
            handleSelection(e);
          },
          menuData: [
            {
              id: "23",
              text: "Profile",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            {
              id: "24",
              text: "Security",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
            {
              id: "25",
              text: "Notifications",
              icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>',
              action: (e) => {
                handleSelection(e);
              },
            },
          ],
        },
      ];

      const handleSelection = (e) => {
        console.log("action", e.detail);
        selectedItem = e.detail.id;
      };

      menubar.items = items;

      menubar.menuActiveItemId = selectedItem;
    }, 0);

    return card;
  }
}

export default MenubarComponent;
