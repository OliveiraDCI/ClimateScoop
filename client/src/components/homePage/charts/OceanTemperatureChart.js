import { ResponsiveLine } from "@nivo/line";
import { useState, useEffect } from "react";
import axios from "axios";

function OceanTemperatureChart() {
  const [externalRawData, setExternalRawData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://global-warming.org/api/ocean-warming-api"
        );
        const data = await response.data.result;

        console.log("ocean data: ", data);

        setExternalRawData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!externalRawData) {
    return <div>Loading...</div>;
  }

  const sortedData = Object.keys(externalRawData)
    .sort()
    .map((year) => ({
      x: year,
      y: externalRawData[year],
    }));

  const data = [{ id: "ocean-temperature", data: sortedData }];

  return (
    <div
      style={{
        // height: "fit-content",
        height: "25vh",
        minHeight: "180px",
        width: "100%",
        background:
          "linear-gradient(to top, rgba(164, 195, 178, 0.9), rgba(107, 144, 128, 0.4))",
        borderRadius: "15px 15px 0 0",
        fontSize: "14px",
        boxShadow:
          "0 0 0 rgba(164, 195, 178, 0.5), 0 0 0 rgba(164, 195, 178, 0.5), 0px -10px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginTop: "1em",
          color: "var(--white)",
        }}
      >
        Ocean Temperature over time ( °C )
      </h2>

      <ResponsiveLine
        data={data}
        key="ocean-temperature-chart"
        margin={{ top: 5, right: 15, bottom: 35, left: 40 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: -0.5,
          max: 0.8,
          stacked: true,
          reverse: false,
        }}
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -45,
          tickValues: sortedData.filter((d, i) => i % 20 === 0).map((d) => d.x),
          legendOffset: 36,
          legendPosition: "middle",
          style: {
            textTransform: "uppercase",
            fontWeight: "bold",
            fill: "var(--white)",
          },
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: "nivo" }}
        pointSize={2}
        theme={{
          // background: "var(--dark-green)",
          textColor: "var(--white)",
          axis: {
            domain: {
              line: {
                stroke: "#555555",
                strokeWidth: 1,
              },
            },
            ticks: {
              line: {
                stroke: "#555555",
                strokeWidth: 1,
              },
              text: {
                fontSize: "12px",
                textTransform: "uppercase",
                fill: "var(--white)",
              },
            },
          },
        }}
        useMesh={false}
      />
    </div>
  );
}

export default OceanTemperatureChart;
