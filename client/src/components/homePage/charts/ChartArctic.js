import { ResponsiveLine } from "@nivo/line";
import { useEffect, useState } from "react";
import axios from "axios";

const ChartArctic = () => {
  const [externalRawData, setExternalRawData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://global-warming.org/api/arctic-api"
        );
        const data = await response.data.arcticData;

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

  const formattedData = externalRawData.map(({ year, extent }) => ({
    x: year,
    y: extent,
  }));

  return (
    <div
      style={{
        height: "25vh",
        minHeight: "150px",
        width: "100%",
        background: "var(--light-tone)",
        fontSize: "13px",
        marginBottom: "5em",
      }}
    >
      <h2 style={{ textAlign: "center", marginTop: "2em", color: "#fff" }}>
        Melted Polar Ice Caps ( million km² )
      </h2>
      <ResponsiveLine
        data={[{ id: "Extent", data: formattedData }]}
        theme={{
          textColor: "#fff",
          background: "var(--light-tone)",
        }}
        key="arctic-temperature-chart"
        margin={{ top: 15, right: 15, bottom: 40, left: 40 }}
        xScale={{ type: "linear", min: "1979", max: "2023" }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickValues: [1980, 1990, 2000, 2010, 2020],
          // legend: "Year",
          legendOffset: 36,
          tickPadding: 8,

          tickRotation: -45,
          format: (value) => `${value}`,
          style: { fontSize: "14px", fill: "white" },
        }}
        axisLeft={{
          legend: "",
          legendOffset: -50,
          tickSize: 5,
          tickPadding: 8,
          // Adjust styles
          style: { fontSize: "18px", fill: "white" },
        }}
        colors={{ scheme: "set1" }}
        lineWidth={3}
        pointSize={5}
        pointColor={{ theme: "background" }}
        pointBorderWidth={1}
        pointBorderColor={{ from: "serieColor" }}
        enableArea={true}
        areaOpacity={0.2}
        enableCrosshair={false}
        useMesh={true}
      />
    </div>
  );
};

export default ChartArctic;
