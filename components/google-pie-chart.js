import GoogleChart from "./GoogleChart.js";

class GooglePieChart extends GoogleChart {
    chartType = "Pie";
}

window.customElements.define('google-pie-chart', GooglePieChart);
