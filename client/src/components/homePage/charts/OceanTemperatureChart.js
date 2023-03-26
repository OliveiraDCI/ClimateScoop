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
        height: "25vh",
        minHeight: "180px",
        width: "100%",
        background: "var(--light-tone)",
        fontSize: "14px",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: "1em", color: "#fff" }}>
        Ocean Temperature over time ( °C )
      </h2>

      <ResponsiveLine
        data={data}
        key="ocean-temperature-chart"
        tooltip={({ point }) => {
          if (point.data.y === null) {
            return (
              <div style={{ background: "#fff", padding: "5px 10px" }}>
                No data available for {point.data.x}
              </div>
            );
          }

          return (
            <div style={{ background: "#fff", padding: "5px 10px" }}>
              {point.data.x}: {point.data.y}
            </div>
          );
        }}
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
            fill: "#fff",
          },
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          // legend: "Temperature",
          legendOffset: -42,
          legendPosition: "middle",
          style: {
            textTransform: "uppercase",
            fontWeight: "bold",
            fill: "#fff",
          },
        }}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: "nivo" }}
        lineWidth={1}
        pointSize={2}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="y"
        pointLabelYOffset={-12}
        useMesh={true}
        theme={{
          background: "var(--light-tone)",
          textColor: "#fff",
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
                fontWeight: "bold",
                textTransform: "uppercase",
                fill: "#fff",
              },
            },
            legend: {
              text: {
                fontSize: "14px",
                fontWeight: "bold",
                textTransform: "uppercase",
                fill: "#fff",
              },
            },
          },
          legends: {
            text: {
              fontSize: "12px",
              fontWeight: "bold",
              textTransform: "uppercase",
              fill: "#fff",
            },
          },
        }}
      />
    </div>
  );
}

export default OceanTemperatureChart;
