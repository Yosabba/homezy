import React from "react";
import ReactApexChart from "react-apexcharts";

class ReservationChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "2022 Rooms",
          data: [400, 400, 650, 500, 900, 750, 850, 600, 1000, 500, 650, 700],
        },
        {
          name: "2021 Rooms",
          data: [350, 350, 420, 370, 500, 400, 550, 420, 600, 450, 550, 400],
        },
      ],
      options: {
        chart: {
          height: 400,
          type: "area",
          toolbar: {
            show: false,
          },
        },
        colors: ["#1362FC", "#FF6E5A"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
          curve: "smooth",
        },
        legend: {
          show: false,
        },
        grid: {
          borderColor: "#EBEBEB",
          strokeDashArray: 6,
        },
        markers: {
          strokeWidth: 6,
          hover: {
            size: 15,
          },
        },
        yaxis: {
          labels: {
            offsetX: -12,
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 400,
            },
          },
        },
        xaxis: {
          categories: [
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
          labels: {
            style: {
              colors: "#787878",
              fontSize: "13px",
              fontFamily: "Poppins",
              fontWeight: 400,
            },
          },
        },
        fill: {
          type: "solid",
          opacity: 0.1,
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
      },
    };
  }
  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={400}
        />
      </div>
    );
  }
}

export default ReservationChart;
