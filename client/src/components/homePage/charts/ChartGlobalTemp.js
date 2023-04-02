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
    return <div class="spinner"></div>;
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
        background:
          "linear-gradient(to top, rgba(164, 195, 178, 0.9), rgba(107, 144, 128, 0.4))",
        borderRadius: "15px",
        fontSize: "13px",
        boxShadow:
          "0 0 0 rgba(164, 195, 178, 0.5), 0 0 0 rgba(164, 195, 178, 0.5), 0px -10px 10px rgba(0, 0, 0, 0.5)",
      }}
    >
      <h2
        style={{ textAlign: "center", marginTop: "1em", color: "var(--white)" }}
      >
        Global Temperature Anomalies ( °C )
      </h2>
      <ResponsiveLine
        data={dataByYear}
        theme={{
          textColor: "var(--white)",
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
        colors={["#B83C44"]}
        lineWidth={1}
        pointSize={2}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        useMesh={false}
        legends={[]}
      />
    </div>
  );
};

export default ChartGlobalTemp;
