import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

const DonutChart = ({ options: initialOptions, series: initialSeries, labels: initialLabels,colors: initialColors }) => {
  const [options, setOptions] = useState({
    
    chart: {
      type: 'donut',
    },
    width:60,
    stroke: {
      width: 0
    },
    dataLabels: {
      enabled: false
    },
    responsive: [{
      breakpoint: 680,
      options: {
        chart: {
          width: 360
        },
        legend: {
          position: 'top'
        },
      }
    }],
    fill: {
      colors: initialColors || ['#D0B2F6', '#e1e023', '#7c3cfa'] // Use initialColors prop or default value
    },
    markers: {
      fillColors: initialColors || ['#D0B2F6', '#e1e023', '#7c3cfa'] // Use initialColors prop or default value
    },
    legend: {
      position: 'top',
      labels: {
        colors: initialColors || ['#D0B2F6', '#e1e023', '#7c3cfa'], // Use initialColors prop or default value
        useSeriesColors: false
      },
      markers: {
        width: 24,
        height: 12,
        strokeWidth: 0,
        strokeColor: '#fff',
        fillColors: initialColors || ['#D0B2F6', '#7c3cfa', '#e1e023',], // Use initialColors prop or default value
        radius: 0,
        customHTML: undefined,
        onClick: undefined,
        offsetX: 0,
        offsetY: 0
      },
    },
    // tooltip: {
    //   theme: 'dark', // Set tooltip theme to 'dark'
    //   custom: function({ seriesIndex, w }) {
    //     const color = initialColors ? initialColors[seriesIndex] : '#D0B2F6'; // Use color from initialColors prop or default value
    //     return `<div class="apexcharts-tooltip-custom" style="color:${color};">${w.globals.seriesNames[seriesIndex]}: ${w.globals.series[seriesIndex]}</div>`;
    //   }
    // },
    ...initialOptions
  });
  const [series, setSeries] = useState(initialSeries || []); // Use initialSeries prop or default value
  const [labels, setLabels] = useState(initialLabels || []); // Use initialLabels prop or default value

  // Update options and series whenever initialSeries or initialLabels prop changes
  useEffect(() => {
    setOptions({
      ...options,
      labels: labels
    });
    setSeries(initialSeries || []);
  }, [initialSeries, initialLabels]);

  // Function to update series data with new labels
  const updateSeries = (newLabels) => {
    setLabels(newLabels);
  };

  return (
    <div className="donut">
      <Chart options={options} series={series} type="donut" width="380" />
    </div>
  );
};

DonutChart.defaultProps = {
  options: {}, // Set default options as an empty object
  series: [], // Set default series as an empty array
  colors: undefined // Set default colors as undefined
};

export default DonutChart;
