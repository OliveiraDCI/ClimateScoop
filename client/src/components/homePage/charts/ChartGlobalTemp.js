import { ResponsiveLine } from "@nivo/line";
import { useState, useEffect } from "react";
import axios from "axios";

const ChartGlobalTemp = () => {
  const [externalRawData, setExternalRawData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://global-warming.org/api/temperature-api"
        );
        const data = await response.data.result;

        console.log("global data: ", data);

        setExternalRawData(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!externalRawData) {
    return <div>Loading...</div>;
  }

  const dataByYear = externalRawData.reduce((acc, { time, station }) => {
    const year = time.split(".")[0];
    const existingData = acc.find((d) => d.id === year);

    if (existingData) {
      existingData.data.push({ x: Number(time), y: Number(station) });
    } else {
      acc.push({
        id: year,
        data: [{ x: Number(time), y: Number(station) }],
      });
    }

    return acc;
  }, []);

  return (
    <div
      style={{
        height: "25vh",
        minHeight: "170px",
        width: "100%",
        background: "var(--light-tone)",
        fontSize: "13px",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: "2em", color: "#fff" }}>
        Global Temperature Anomalies ( °C )
      </h2>
      <ResponsiveLine
        data={dataByYear}
        theme={{
          textColor: "#fff",
          background: "var(--light-tone)",
        }}
        key="global-temperature-chart"
        margin={{ top: 25, right: 15, bottom: 50, left: 40 }}
        xScale={{ type: "linear", min: "auto", max: "auto" }}
        yScale={{ type: "linear", min: -1.0, max: 1.4 }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickValues: [
            "1880",
            "1900",
            "1920",
            "1940",
            "1960",
            "1980",
            "2000",
            "2020",
          ],
          tickRotation: -45,
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickValues: [-1.0, -0.5, 0, 0.5, 1.0],
          legendOffset: -40,
          legendPosition: "middle",
        }}
        enablePoints={false}
        enableGridX={false}
        enableGridY={true}
        colors={["#FF5A5F"]}
        lineWidth={1}
        pointSize={2}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={true}
        legends={[]}
      />
    </div>
  );
};

export default ChartGlobalTemp;
