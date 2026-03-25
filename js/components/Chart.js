class ChartComponent {
  static render() {
    const card = document.createElement("div");
    card.className = "component-card full-width-card";

    // ── Data ──────────────────────────────────────────────────────────────────

    const barData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{ label: "Sales 2024", data: [65, 59, 80, 81, 56, 55] }],
    };

    const lineData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Revenue",
          data: [12000, 19000, 15000, 25000, 22000, 30000],
          fill: false,
          tension: 0.1,
        },
        {
          label: "Expenses",
          data: [8000, 12000, 10000, 15000, 14000, 18000],
          fill: false,
          tension: 0.1,
        },
      ],
    };

    const pieData = {
      labels: ["Red", "Blue", "Yellow", "Green", "Orange"],
      datasets: [
        {
          data: [12, 19, 3, 5, 8],
          backgroundColor: [
            "rgba(255,99,132,0.8)",
            "rgba(54,162,235,0.8)",
            "rgba(255,206,86,0.8)",
            "rgba(75,192,192,0.8)",
            "rgba(255,159,64,0.8)",
          ],
        },
      ],
    };

    const doughnutData = {
      labels: ["Desktop", "Mobile", "Tablet"],
      datasets: [{ data: [55, 35, 10] }],
    };

    const radarData = {
      labels: [
        "Speed",
        "Strength",
        "Endurance",
        "Agility",
        "Accuracy",
        "Technique",
      ],
      datasets: [
        { label: "Player A", data: [85, 70, 90, 75, 80, 88], fill: true },
        { label: "Player B", data: [70, 85, 75, 90, 85, 70], fill: true },
      ],
    };

    const bubbleData = {
      datasets: [
        {
          label: "Sales Q1",
          data: [
            { x: 20, y: 30, r: 15 },
            { x: 40, y: 10, r: 10 },
            { x: 30, y: 22, r: 20 },
          ],
        },
        {
          label: "Sales Q2",
          data: [
            { x: 15, y: 25, r: 12 },
            { x: 35, y: 35, r: 18 },
            { x: 25, y: 15, r: 8 },
          ],
        },
      ],
    };

    const polarData = {
      labels: ["Marketing", "Development", "Sales", "Support", "Operations"],
      datasets: [{ label: "Budget by department", data: [11, 16, 7, 9, 13] }],
    };

    const scatterData = {
      datasets: [
        {
          label: "Group A",
          data: [
            { x: 10, y: 20 },
            { x: 15, y: 25 },
            { x: 20, y: 30 },
            { x: 25, y: 28 },
            { x: 30, y: 35 },
            { x: 35, y: 33 },
          ],
        },
        {
          label: "Group B",
          data: [
            { x: 12, y: 15 },
            { x: 18, y: 22 },
            { x: 22, y: 18 },
            { x: 28, y: 25 },
            { x: 32, y: 28 },
            { x: 38, y: 32 },
          ],
        },
      ],
    };

    const stackedBarData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        { label: "Product A", data: [50, 60, 70, 80, 75, 90] },
        { label: "Product B", data: [30, 40, 35, 45, 50, 55] },
        { label: "Product C", data: [20, 25, 30, 28, 35, 40] },
      ],
    };

    const stackedLineData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        { label: "North Region", data: [40, 45, 50, 55, 60, 65], fill: true },
        { label: "Central Region", data: [30, 35, 40, 38, 45, 50], fill: true },
        { label: "South Region", data: [25, 28, 32, 30, 35, 40], fill: true },
      ],
    };

    const multiPieData = {
      labels: ["Product A", "Product B", "Product C", "Product D"],
      datasets: [
        { label: "2023", data: [30, 25, 20, 25] },
        { label: "2024", data: [35, 20, 25, 20] },
      ],
    };

    const dynamicData = {
      labels: ["A", "B", "C", "D", "E"],
      datasets: [
        {
          label: "Values",
          data: [10, 45, 30, 70, 55],
          backgroundColor: "rgba(75,192,192,0.5)",
        },
      ],
    };

    const mixedChartData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          type: "bar",
          label: "Revenue",
          data: [50000, 62000, 71000, 83000, 76000, 91000],
        },
        {
          type: "bar",
          label: "Expenses",
          data: [32000, 37000, 43000, 48000, 44000, 52000],
        },
        {
          type: "line",
          label: "Profit",
          data: [18000, 25000, 28000, 35000, 32000, 39000],
          fill: false,
          tension: 0.4,
          borderWidth: 2,
          pointRadius: 4,
        },
      ],
    };

    const progressiveLineData = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Sales 2024",
          data: [65, 59, 80, 81, 56, 55, 72, 68, 90, 85, 78, 92],
          borderWidth: 2,
          fill: false,
          pointRadius: 4,
        },
      ],
    };

    const delayAnimData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        { label: "Dataset 1", data: [65, 59, 80, 81, 56, 55] },
        { label: "Dataset 2", data: [45, 69, 60, 71, 46, 65] },
        { label: "Dataset 3", data: [45, 25, 16, 36, 67, 18] },
      ],
    };

    const dropAnimData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        { label: "Dataset 1", data: [65, 59, 80, 81, 56, 55] },
        { label: "Dataset 2", data: [45, 69, 60, 71, 46, 65] },
      ],
    };

    const loopAnimData = {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [{ label: "Sales", data: [65, 59, 80, 81, 56, 55] }],
    };

    const progEasingData = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Trend",
          data: [65, 59, 80, 81, 56, 55, 72, 68, 90, 85, 78, 92],
          borderWidth: 3,
          tension: 0,
          fill: false,
          pointRadius: 5,
        },
      ],
    };

    // ── Options ───────────────────────────────────────────────────────────────

    const bubbleOptions = {
      scales: {
        x: { title: { display: true, text: "Customers (thousands)" } },
        y: { title: { display: true, text: "Revenue (USD thousands)" } },
      },
    };

    const polarAreaOptions = { plugins: { legend: { position: "right" } } };

    const scatterOptions = {
      scales: {
        x: { title: { display: true, text: "Variable X" } },
        y: { title: { display: true, text: "Variable Y" } },
      },
      plugins: {
        title: { display: true, text: "Correlation between variables" },
      },
    };

    const stackedBarOptions = {
      scales: {
        x: { stacked: true },
        y: { stacked: true, title: { display: true, text: "Total sales" } },
      },
      plugins: { title: { display: true, text: "Sales stacked by product" } },
    };

    const stackedLineOptions = {
      scales: {
        x: { title: { display: true, text: "Month" } },
        y: {
          stacked: true,
          title: { display: true, text: "Cumulative sales" },
        },
      },
      plugins: { title: { display: true, text: "Sales by region (stacked)" } },
    };

    const multiPieOptions = {
      plugins: { title: { display: true, text: "Sales distribution by year" } },
    };

    const mixedChartOptions = {
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Amount (USD)" },
        },
      },
      plugins: { title: { display: true, text: "Revenue, Expenses & Profit" } },
    };

    const dropAnimOptions = {
      animations: {
        y: { easing: "easeInOutElastic", duration: 1500, loop: true, from: 0 },
      },
    };

    const loopAnimOptions = {
      animations: {
        y: {
          duration: 800,
          easing: "easeInOutSine",
          loop: true,
          from: (ctx) => ctx.chart.scales.y.max,
        },
      },
    };

    const delayAnimOptions = {
      animations: {
        y: {
          duration: 600,
          easing: "easeInOutQuart",
          loop: true,
          from: 0,
          delay: (ctx) => ctx.dataIndex * 150 + ctx.datasetIndex * 50,
        },
      },
      scales: { x: { stacked: true }, y: { stacked: true } },
    };

    const progressiveLineOptions = {
      animations: {
        tension: {
          duration: 1000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
    };

    const progEasingOptions = {
      animations: {
        y: {
          type: "number",
          easing: "easeOutQuart",
          duration: 4000 / 12,
          loop: true,
          from: (ctx) =>
            ctx.index === 0
              ? ctx.chart.scales.y.getPixelForValue(100)
              : ctx.chart
                  .getDatasetMeta(ctx.datasetIndex)
                  .data[ctx.index - 1].getProps(["y"], true).y,
          delay: (ctx) => ctx.index * (4000 / 12),
        },
      },
    };

    // ── Template ──────────────────────────────────────────────────────────────

    card.innerHTML = `
      <div class="component-preview" style="display:block; padding:16px;">
        <div class="chart-wrapper">

          <div class="chart-section">
            <h4 class="chart-section-title">Chart Types</h4>
            <div class="chart-grid">

              <div class="chart-card">
                <p class="chart-card-title">Bar</p>
                <p class="chart-card-desc">Data distribution by category</p>
                <ms-chart id="chart-bar" type="bar" variant="primary" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Line</p>
                <p class="chart-card-desc">Multiple datasets comparison over time</p>
                <ms-chart id="chart-line" type="line" variant="info" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Pie</p>
                <p class="chart-card-desc">Proportional distribution with custom colors</p>
                <ms-chart id="chart-pie" type="pie" variant="success" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Doughnut</p>
                <p class="chart-card-desc">Circular chart with a hollow center</p>
                <ms-chart id="chart-doughnut" type="doughnut" variant="warning" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Radar</p>
                <p class="chart-card-desc">Multivariate data across multiple axes</p>
                <ms-chart id="chart-radar" type="radar" variant="secondary" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Bubble</p>
                <p class="chart-card-desc">Three-dimensional data (x, y, radius)</p>
                <ms-chart id="chart-bubble" type="bubble" variant="primary" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Polar Area</p>
                <p class="chart-card-desc">Equal-angle segments with value-proportional radii</p>
                <ms-chart id="chart-polar" type="polarArea" variant="mixed" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Scatter</p>
                <p class="chart-card-desc">Correlation between two numeric variables</p>
                <ms-chart id="chart-scatter" type="scatter" variant="info" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Stacked Bar</p>
                <p class="chart-card-desc">Cumulative totals per category segment</p>
                <ms-chart id="chart-stacked-bar" type="bar" variant="mixed" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Stacked Line</p>
                <p class="chart-card-desc">Filled area chart with stacked regions</p>
                <ms-chart id="chart-stacked-line" type="line" variant="primary" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Multi Series Pie</p>
                <p class="chart-card-desc">Concentric rings for multi-year comparison</p>
                <ms-chart id="chart-multi-pie" type="pie" variant="mixed" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Dynamic Update</p>
                <p class="chart-card-desc">Reactive data binding — charts update automatically when data changes</p>
                <ms-chart id="chart-dynamic" type="bar" variant="success" height="280px"></ms-chart>
              </div>

              <div class="chart-card chart-card--full">
                <p class="chart-card-title">Mixed Chart</p>
                <p class="chart-card-desc">Combines bar and line datasets in a single chart — each dataset declares its own type</p>
                <ms-chart id="chart-mixed" type="bar" variant="mixed" height="280px"></ms-chart>
              </div>

            </div>
          </div>

          <div class="chart-section">
            <h4 class="chart-section-title">Animations</h4>
            <div class="chart-grid">

              <div class="chart-card">
                <p class="chart-card-title">Progressive Line</p>
                <p class="chart-card-desc">Infinite loop — tension animates from 1 to 0 continuously</p>
                <ms-chart id="chart-prog-line" type="line" variant="info" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Delay Animation</p>
                <p class="chart-card-desc">Staggered loop — bars rise from zero with sequential delay per position</p>
                <ms-chart id="chart-delay" type="bar" variant="mixed" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Drop Animation</p>
                <p class="chart-card-desc">Continuous loop — bars rise from zero with elastic easing (easeInOutElastic)</p>
                <ms-chart id="chart-drop" type="bar" variant="primary" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Loop Animation</p>
                <p class="chart-card-desc">Continuous loop — bars animate from max value with sine easing</p>
                <ms-chart id="chart-loop" type="bar" variant="success" height="280px"></ms-chart>
              </div>

              <div class="chart-card">
                <p class="chart-card-title">Progressive Line with Easing</p>
                <p class="chart-card-desc">Continuous loop — points draw sequentially with easeOutQuart per index</p>
                <ms-chart id="chart-prog-easing" type="line" variant="secondary" height="280px"></ms-chart>
              </div>

            </div>
          </div>

        </div>
      </div>
    `;

    setTimeout(() => {
      const set = (id, data, options) => {
        const el = card.querySelector(`#${id}`);
        if (!el) return;
        el.data = data;
        if (options) el.options = options;
      };

      set("chart-bar", barData);
      set("chart-line", lineData);
      set("chart-pie", pieData);
      set("chart-doughnut", doughnutData);
      set("chart-radar", radarData);
      set("chart-bubble", bubbleData, bubbleOptions);
      set("chart-polar", polarData, polarAreaOptions);
      set("chart-scatter", scatterData, scatterOptions);
      set("chart-stacked-bar", stackedBarData, stackedBarOptions);
      set("chart-stacked-line", stackedLineData, stackedLineOptions);
      set("chart-multi-pie", multiPieData, multiPieOptions);
      set("chart-dynamic", dynamicData);
      set("chart-mixed", mixedChartData, mixedChartOptions);
      set("chart-prog-line", progressiveLineData, progressiveLineOptions);
      set("chart-delay", delayAnimData, delayAnimOptions);
      set("chart-drop", dropAnimData, dropAnimOptions);
      set("chart-loop", loopAnimData, loopAnimOptions);
      set("chart-prog-easing", progEasingData, progEasingOptions);
    }, 0);

    return card;
  }
}

export default ChartComponent;
