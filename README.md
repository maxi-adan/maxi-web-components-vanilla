# 🚀 Maxi Web Components - Vanilla JS Showcase

A complete demonstration application showcasing all components from the **Maxi Web Components** library working with **pure Vanilla JavaScript**, no frameworks required.

![Maxi Web Components Preview](./assets/logo.png)

---

## 📋 Table of Contents

- [Description](#-description)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Available Components](#-available-components)
- [Installation](#-installation)
- [Usage](#-usage)
- [Available Scripts](#-available-scripts)
- [Deployment](#-deployment)
- [Development](#-development)
- [Technologies](#-technologies)
- [License](#-license)

---

## 🎯 Description

This project is an **interactive showcase** of the `maxi-web-components` library, designed to demonstrate how to use each component in a **Vanilla JavaScript** environment without the need for frameworks like Angular, React, or Vue.

### What is Maxi Web Components?

A library of reusable **Web Components** built with **Stencil.js**, that work with any framework or without any framework at all.

---

## ✨ Features

- ✅ **100% Vanilla JavaScript** - No frameworks, just pure JS
- 🎨 **Modern Design** - Clean and professional UI
- 📱 **Fully Responsive** - Adapts to mobile, tablet, and desktop
- 🧩 **Modular Architecture** - Each component in its own file
- 🚀 **Optimized Deployment** - Build script for production
- 🎭 **Web Components** - Using web standards
- 💅 **CSS Grid & Flexbox** - Modern and flexible layout
- 🌈 **Color-Coded Sections** - Each section with its own identifying color

---

## 📁 Project Structure

```
vanilla/
├── assets/                    # Static resources
│   ├── icons/                # SVG icons
│   ├── logo.png              # Project logo
│   ├── vanilla.svg           # Vanilla JS logo
│   └── loading.gif           # Loading animation
│
├── js/                       # JavaScript
│   ├── components/           # Modular components
│   │   ├── Accordion.js      # Collapsible panels
│   │   ├── Autocomplete.js   # Autocomplete input
│   │   ├── Badge.js          # Status badges
│   │   ├── Buttons.js        # Buttons (solid, outline, icon)
│   │   ├── Calendar.js       # Date picker
│   │   ├── Card.js           # Content cards
│   │   ├── Breadcrumb.js     # Navigation breadcrumb trail
│   │   ├── Carousel.js       # Interactive carousel for displaying multiple items with navigation
│   │   ├── CascadeMenu.js    # Hierarchical menu
│   │   ├── Chart.js          # Interactive charts (bar, line, pie, radar, bubble, etc.)
│   │   ├── Checkbox.js       # Checkboxes
│   │   ├── Chips.js          # Removable tags/chips
│   │   ├── ControlNumber.js  # Numeric control input
│   │   ├── Dialog.js         # Modal dialogs
│   │   ├── Dropdown.js       # Dropdowns/Selects
│   │   ├── FieldSet.js       # Grouped form fields with collapsible legend
│   │   ├── Icon.js           # Scalable icons with size and color customization
│   │   ├── InputField.js     # Text inputs
│   │   ├── InputOTP.js       # One-Time Password verification
│   │   ├── InputNumber.js    # Number inputs
│   │   ├── InputRadio.js     # Radio buttons
│   │   ├── InputSwitch.js    # Toggle switches
│   │   ├── InputPassword.js  # Password input with strength indicator
│   │   ├── Knob.js           # Rotary input component
│   │   ├── Image.js          # Image component with preview
│   │   ├── MeterGroup.js     # Meter group display
│   │   ├── Popover.js        # Popover display
│   │   ├── SelectButton.js   # Group of toggle buttons
│   │   ├── TextEditor.js     # WYSIWYG rich text editor
│   │   ├── Menubar.js        # Horizontal navigation menu
│   │   ├── Messages.js       # Contextual messages with multiple variants
│   │   ├── MultiSelect.js    # Multiple selects
│   │   ├── Notification.js   # Toast notifications
│   │   ├── Paginator.js      # Paginator
│   │   ├── Preload.js        # Loading overlay
│   │   ├── ProgressBar.js   # Progress indicator
│   │   ├── Sidebar.js        # Sidebar
│   │   ├── Skeleton.js       # Loading placeholders
│   │   ├── Spinner.js        # Loading spinner
│   │   ├── Steps.js          # Step-by-step navigation
│   │   ├── Table.js          # Data tables
│   │   ├── Tabs.js           # Tabs
│   │   ├── Timeline.js       # Timeline
│   │   └── Tooltip.js        # Tooltips
│   └── index.js              # Main entry point
│
├── styles/                   # CSS styles
│   └── main.css              # Main styles
│
├── vendor/                   # Vendor dependencies (auto-generated)
│   └── maxi-web-components/  # Symlink to node_modules (local dev)
│
├── build.js                  # Build script for production
├── setup-vendor.js           # Setup script for local development
├── index.html                # Main page
├── package.json              # Dependencies and scripts
├── netlify.toml              # Netlify configuration
└── .gitignore                # Files ignored by Git
```

---

## 🧩 Available Components

### 📝 Input Components

| Component          | Description                                       | File               |
| ------------------ | ------------------------------------------------- | ------------------ |
| **Input Field**    | Basic text input field                            | `InputField.js`    |
| **Input Number**   | Numeric input with increment/decrement            | `InputNumber.js`   |
| **Input Switch**   | On/off toggle switch                              | `InputSwitch.js`   |
| **Input Radio**    | Radio buttons with multiple options               | `InputRadio.js`    |
| **Checkbox**       | Checkboxes for multiple selection                 | `Checkbox.js`      |
| **Autocomplete**   | Input with autocomplete                           | `Autocomplete.js`  |
| **Dropdown**       | Dropdown/Select                                   | `Dropdown.js`      |
| **MultiSelect**    | Select with multiple selection                    | `MultiSelect.js`   |
| **Calendar**       | Date picker                                       | `Calendar.js`      |
| **Input OTP**      | One-Time Password verification                    | `InputOTP.js`      |
| **Control Number** | Numeric control input for managing numeric values | `ControlNumber.js` |
| **Input Password** | Secure password input with strength indicator     | `InputPassword.js` |
| **Knob**           | Rotary input component for numerical values       | `Knob.js`          |
| **Text Editor**    | WYSIWYG editor with rich text capabilities        | `TextEditor.js`    |

### 🧭 Navigation Components

| Component        | Description                                                        | File             |
| ---------------- | ------------------------------------------------------------------ | ---------------- |
| **Menubar**      | Horizontal navigation menu                                         | `Menubar.js`     |
| **Breadcrumb**   | Navigation breadcrumb trail showing current page location          | `Breadcrumb.js`  |
| **Cascade Menu** | Hierarchical dropdown menu                                         | `CascadeMenu.js` |
| **Tabs**         | Navigation tabs                                                    | `Tabs.js`        |
| **Sidebar**      | Sidebar navigation                                                 | `Sidebar.js`     |
| **Steps**        | Step-by-step navigation component - Click on each step to navigate | `Steps.js`       |
| **Popover**      | Contextual menu display relative to a trigger element              | `Popover.js`     |

### 📄 Paginator

| Component     | Description                     | File           |
| ------------- | ------------------------------- | -------------- |
| **Paginator** | Pagination control with options | `Paginator.js` |

### 🎬 Action Components

| Component         | Description                                       | File              |
| ----------------- | ------------------------------------------------- | ----------------- |
| **Buttons**       | Buttons (solid, outline, icon)                    | `Buttons.js`      |
| **Chips**         | Removable tags/chips                              | `Chips.js`        |
| **Select Button** | Group of buttons for single or multiple selection | `SelectButton.js` |

### 🎨 Display Components

| Component        | Description                                                               | File             |
| ---------------- | ------------------------------------------------------------------------- | ---------------- |
| **Card**         | Content cards                                                             | `Card.js`        |
| **Badge**        | Status badges                                                             | `Badge.js`       |
| **Fieldset**     | Grouped form fields with collapsible legend for organizing related inputs | `FieldSet.js`    |
| **Timeline**     | Timeline                                                                  | `Timeline.js`    |
| **Spinner**      | Loading spinner                                                           | `Spinner.js`     |
| **Skeleton**     | Animated loading placeholders                                             | `Skeleton.js`    |
| **Preload**      | Global loading overlay                                                    | `Preload.js`     |
| **Progress Bar** | Progress indicator for showing completion status or loading state         | `ProgressBar.js` |
| **Accordion**    | Collapsible content panels                                                | `Accordion.js`   |
| **Carousel**     | Interactive carousel for displaying multiple items with navigation        | `Carousel.js`    |
| **Image**        | Image component with preview and zoom capabilities                        | `Image.js`       |
| **Meter Group**  | Displays relative values within a range as group of bars                  | `MeterGroup.js`  |

### 📊 Data Components

| Component | Description                          | File       |
| --------- | ------------------------------------ | ---------- |
| **Table** | Tables with pagination and selection | `Table.js` |

### ⚡ State Components

| Component        | Description                   | File             |
| ---------------- | ----------------------------- | ---------------- |
| **Preload**      | Global loading overlay        | `Preload.js`     |
| **Skeleton**     | Animated loading placeholders | `Skeleton.js`    |
| **Spinner**      | Loading spinner               | `Spinner.js`     |
| **Progress Bar** | Progress indicator            | `ProgressBar.js` |

### 💬 Feedback Components

| Component        | Description                                                                           | File              |
| ---------------- | ------------------------------------------------------------------------------------- | ----------------- |
| **Notification** | Toast notifications                                                                   | `Notification.js` |
| **Dialog**       | Modal dialogs                                                                         | `Dialog.js`       |
| **Tooltip**      | Informative tooltips                                                                  | `Tooltip.js`      |
| **Message**      | Contextual messages for displaying different types of feedback with multiple variants | `Messages.js`     |

### 📈 Chart Components

| Component | Description                                                                                              | File       |
| --------- | -------------------------------------------------------------------------------------------------------- | ---------- |
| **Chart** | Interactive charts: bar, line, pie, doughnut, radar, bubble, polar area, scatter, stacked, mixed & more | `Chart.js` |

#### Chart Types

| Type            | Description                                               |
| --------------- | --------------------------------------------------------- |
| `bar`           | Data distribution by category                            |
| `line`          | Multiple datasets comparison over time                   |
| `pie`           | Proportional distribution with custom colors             |
| `doughnut`      | Circular chart with a hollow center                      |
| `radar`         | Multivariate data across multiple axes                   |
| `bubble`        | Three-dimensional data (x, y, radius)                    |
| `polarArea`     | Equal-angle segments with value-proportional radii        |
| `scatter`       | Correlation between two numeric variables                |
| Stacked Bar     | Cumulative totals per category segment                   |
| Stacked Line    | Filled area chart with stacked regions                   |
| Multi Series    | Concentric rings for multi-year comparison               |
| Mixed           | Combines bar and line datasets in a single chart         |

#### Animation Presets

| Preset              | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| Progressive Line    | Tension animates from 1 to 0 in an infinite loop                        |
| Delay Animation     | Bars rise from zero with staggered sequential delay per position         |
| Drop Animation      | Bars rise from zero with elastic easing (`easeInOutElastic`)            |
| Loop Animation      | Bars animate from max value with sine easing                            |
| Progressive Easing  | Points draw sequentially with `easeOutQuart` per index                  |

### 🎨 Icon Components

| Component | Description                                            | File      |
| --------- | ------------------------------------------------------ | --------- |
| **Icon**  | Scalable SVG icons with configurable size and color    | `Icon.js` |

#### Icon Properties

| Property | Type     | Description                          |
| -------- | -------- | ------------------------------------ |
| `name`   | `string` | Icon identifier (e.g. `"home"`)      |
| `size`   | `number` | Icon size in pixels (default `24`)   |
| `color`  | `string` | CSS color value (e.g. `"#3B82F6"`)   |

#### Available Icons

`home`, `search`, `settings`, `user`, `arrow-left`, `arrow-right`, `alert-circle`, `alert-triangle`, `bell`, `calendar`, `check`, `check-circle`, `chevron-down`, `chevron-left`, `chevron-right`, `chevron-up`, `copy`, `download`, `edit`, `eye`, `eye-off`, `filter`, `info`, `lock`, `mail`, `menu`, `minus`, `plus`, `refresh`, `trash`, `unlock`, `upload`, `x`

---

## 🛠 Installation

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Steps

1. **Clone the repository**

   ```bash
   git clone <your-repository>
   cd vanilla
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

---

## 🎮 Usage

### Component Structure

Each component follows this modular structure:

```javascript
// js/components/InputField.js
class InputFieldComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card";

    card.innerHTML = `
            <div class="component-header">
                <h3 class="component-title">Input Field</h3>
                <p class="component-description">Basic text input field</p>
            </div>
            <div class="component-preview">
                <ms-input-field 
                    id="input-field"
                    placeholder="Enter text..."
                    label="Label">
                </ms-input-field>
            </div>
        `;

    // Component logic
    setTimeout(() => {
      const input = card.querySelector("#input-field");
      input.addEventListener("input", (e) => {
        console.log("Value:", e.target.value);
      });
    }, 0);

    return card;
  }
}

export default InputFieldComponent;
```

### Adding a New Component

1. **Create the component file**

   ```bash
   touch js/components/MyComponent.js
   ```

2. **Define the component**

   ```javascript
   class MyComponent {
     static render() {
       const card = document.createElement("div");
       card.className = "component-card";

       card.innerHTML = `
               <div class="component-header">
                   <h3 class="component-title">My Component</h3>
               </div>
               <div class="component-preview">
                   <ms-my-component></ms-my-component>
               </div>
           `;

       return card;
     }
   }
   export default MyComponent;
   ```

3. **Import in `index.js`**

   ```javascript
   import MyComponent from "./components/MyComponent.js";

   // Add to the corresponding category
   this.categories = {
     inputs: [{ name: "MyComponent", component: MyComponent }],
   };
   ```

4. **Add section in `index.html`** (if it's a new category)
   ```html
   <section id="my-section" class="section">
     <div class="section-card">
       <div class="section-header">
         <h2 class="section-title">My Section</h2>
       </div>
       <div id="my-section-grid" class="components-grid">
         <!-- Components will be loaded here -->
       </div>
     </div>
   </section>
   ```

---

## 📜 Available Scripts

### `npm run dev`

Starts a development server at `http://localhost:8080`

```bash
npm run dev
```

### `npm run build`

Builds the application for production in the `dist/` folder

```bash
npm run build
```

**What does the build do?**

- ✅ Copies `index.html`
- ✅ Copies `js/` folder
- ✅ Copies `styles/` folder
- ✅ Copies `assets/` folder
- ✅ Copies `maxi-web-components` to `vendor/` folder
  - Includes `global.css`
  - Includes all JS modules
  - Includes fonts and assets

### `npm run deploy`

Builds and deploys to Netlify

```bash
npm run deploy
```

---

## 🚀 Deployment

### Netlify (Recommended)

#### Automatic Setup

1. **Connect repository**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

2. **Build configuration**

   ```toml
   # netlify.toml
   [build]
     publish = "dist"
     command = "npm run build"

   [build.environment]
     NODE_VERSION = "18"
   ```

3. **Automatic deployment**
   - Every push to the main branch will deploy automatically

#### Manual Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
npm run deploy
```

### Other Platforms

#### Vercel

```bash
npm install -g vercel
vercel
```

#### GitHub Pages

```bash
npm run build
# Upload dist/ contents to gh-pages branch
```

---

## 👨‍💻 Development

### Architecture

The project uses a **modular component-based architecture**:

```
ComponentsApp (index.js)
    ├── Categories (inputs, navigation, actions, etc.)
    │   ├── Component 1
    │   ├── Component 2
    │   └── Component N
    └── Dynamic rendering in the DOM
```

### Rendering Flow

1. **`index.js`** imports all components
2. Groups components by **categories**
3. For each category, gets the **grid container** from the HTML
4. Calls the **`render()`** method of each component
5. **Appends** the returned element to the grid

### Responsive Design

Main breakpoints:

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

```css
/* Mobile First */
.components-grid {
  grid-template-columns: 1fr;
}

/* Tablet */
@media (min-width: 768px) {
  .components-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .components-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Code Conventions

#### File Names

- **PascalCase** for components: `InputField.js`
- **camelCase** for utilities: `helpers.js`
- **kebab-case** for CSS: `main.css`

#### CSS Class Structure

- **BEM-like**: `.component-card`, `.component-header`, `.component-title`
- **Utility**: `.mb-16`, `.flex`, `.grid`
- **State**: `.is-active`, `.is-loading`

#### JavaScript

- **ES6 Modules**: `import/export`
- **Arrow Functions**: When appropriate
- **Template Literals**: For HTML strings
- **`setTimeout`**: To wait for DOM before manipulating

---

## 🛠 Technologies

### Core

- ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white) **HTML5**
- ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white) **CSS3** (Grid, Flexbox, Custom Properties)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black) **Vanilla JavaScript** (ES6+)

### Library

- **Maxi Web Components** (Stencil.js)

### Tools

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white) **Node.js** v18+
- ![NPM](https://img.shields.io/badge/NPM-CB3837?style=flat&logo=npm&logoColor=white) **npm**
- **http-server** (Development)

### Deployment

- ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat&logo=netlify&logoColor=white) **Netlify**

### Fonts

- **Google Fonts** - Source Sans Pro

---

## 📝 Important Notes

### ⚠️ Known Issues

1. **Dropdowns on Mobile**
   - Dropdowns may require horizontal scroll on very small screens
   - Implemented solution: `overflow-x: auto`

2. **Web Components and SEO**
   - Content inside Shadow DOM may not be indexed correctly
   - Consider using Server-Side Rendering for critical SEO

3. **Compatibility**
   - IE11 is not supported (Web Components require modern browsers)
   - Works on: Chrome, Firefox, Safari, Edge (Chromium)

### 💡 Development Tips

1. **Use DevTools** to inspect the Shadow DOM of components
2. **`setTimeout(fn, 0)`** is necessary to wait for DOM rendering
3. **Avoid `position: relative`** on containers if using dropdowns
4. **Use `::part()`** to style Shadow DOM elements
5. **Prefer `querySelector`** over `getElementById` for dynamically created elements

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions are welcome. Please:

1. Fork the project
2. Create a branch for your feature (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Maxi Web Components Team**

- 🌐 Website: https://storybook-mwc.maxilabs.net/js/
- 📧 Email: ext.aasanchez@maxillc.com

---

## 🙏 Acknowledgments

- [Stencil.js](https://stenciljs.com/) - For making Web Components so easy
- [Google Fonts](https://fonts.google.com/) - For Source Sans Pro
- [Netlify](https://www.netlify.com/) - For free hosting

---

<div align="center">

**Made with ❤️ using Vanilla JavaScript**

⭐ If this project helped you, consider giving it a star on GitHub

</div>
