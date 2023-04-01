import "./hero.scss";
import OceanTemperatureChart from "./charts/OceanTemperatureChart";
import ChartGlobalTemp from "./charts/ChartGlobalTemp";
import ChartArctic from "./charts/ChartArctic";

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <DashboardSection />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-image">
      <section className="hero-section">
        <h1>ClimateScoop</h1>
        <p className="hero-description">
          ∙ Climate Statistics Dashboard
          <br />∙ Fresh articles from last 24hrs!
          <br />∙ Create your own! (login required)
        </p>
      </section>
    </div>
  );
}

function DashboardSection() {
  return (
    <section className="dashboard-section">
      <div className="chart">
        <OceanTemperatureChart />
        <ChartGlobalTemp />
        <ChartArctic />
      </div>
    </section>
  );
}

export default HomePage;
