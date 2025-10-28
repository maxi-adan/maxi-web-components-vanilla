import InputField from "./components/InputField.js";
import InputNumber from "./components/InputNumber.js";
import InputSwitch from "./components/InputSwitch.js";
import InputRadio from "./components/InputRadio.js";
import Checkbox from "./components/Checkbox.js";
import Autocomplete from "./components/Autocomplete.js";
import Dropdown from "./components/Dropdown.js";
import MultiSelect from "./components/MultiSelect.js";
import Calendar from "./components/Calendar.js";
import Table from "./components/Table.js";
import Tabs from "./components/Tabs.js";
import Sidebar from "./components/Sidebar.js";
import Paginator from "./components/Paginator.js";
import Buttons from "./components/Buttons.js";
import Chips from "./components/Chips.js";
import Card from "./components/Card.js";
import Badge from "./components/Badge.js";
import Timeline from "./components/Timeline.js";
import Notification from "./components/Notification.js";
import Tooltip from "./components/Tooltip.js";
import Dialog from "./components/Dialog.js";
import Preload from "./components/Preload.js";
import Skeleton from "./components/Skeleton.js";
import Spinner from "./components/Spinner.js";
import CascadeMenu from "./components/CascadeMenu.js";
import Accordion from "./components/Accordion.js";
import InputOTP from "./components/InputOTP.js";

class ComponentsApp {
  constructor() {
    this.categories = {
      inputs: [
        { name: "InputField", component: InputField },
        { name: "InputNumber", component: InputNumber },
        { name: "InputSwitch", component: InputSwitch },
        { name: "InputRadio", component: InputRadio },
        { name: "Checkbox", component: Checkbox },
        { name: "Autocomplete", component: Autocomplete },
        { name: "Dropdown", component: Dropdown },
        { name: "MultiSelect", component: MultiSelect },
        { name: "Calendar", component: Calendar },
        { name: "InputOTP", component: InputOTP },
      ],
      navigation: [
        { name: "CascadeMenu", component: CascadeMenu },
        { name: "Tabs", component: Tabs },
        { name: "Sidebar", component: Sidebar },
      ],
      paginator: [{ name: "Paginator", component: Paginator }],
      actions: [
        { name: "Buttons", component: Buttons },
        { name: "Chips", component: Chips },
      ],
      display: [
        { name: "Card", component: Card },
        { name: "Badge", component: Badge },
        { name: "Timeline", component: Timeline },
        { name: "Accordion", component: Accordion },
      ],
      data: [{ name: "Table", component: Table }],
      feedback: [
        { name: "Notification", component: Notification },
        { name: "Tooltip", component: Tooltip },
        { name: "Dialog", component: Dialog },
      ],
      state: [
        { name: "Preload", component: Preload },
        { name: "Skeleton", component: Skeleton },
        { name: "Spinner", component: Spinner },
      ],
    };

    this.init();
  }

  init() {
    this.renderComponents();
    this.setupScrollIndicator();
  }

  setupScrollIndicator() {
    window.addEventListener("scroll", () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;

      document.body.style.setProperty("--scroll-progress", scrollPercent);
    });
  }

  renderComponents() {
    Object.keys(this.categories).forEach((categoryId) => {
      const grid = document.getElementById(`${categoryId}-grid`);
      if (grid) {
        this.categories[categoryId].forEach(({ name, component }) => {
          const componentElement = component.render();
          grid.appendChild(componentElement);
        });
      }
    });
  }
}

// Inicializar la aplicación cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  new ComponentsApp();
});
