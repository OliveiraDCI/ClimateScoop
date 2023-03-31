import "./hero.scss";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/articles");
  };
  return (
    <div className="bg-image">
      <section className="hero-section">
        <h1>ClimateScoop</h1>
        <p className="hero-description">
          ∙ Climate Statistics Dashboard <br />
          ∙ Fresh articles from last 24hrs!
          <br />
          {/* ∙ Explore articles from media news <br /> */}∙ Create your own!
          (login required)
        </p>
        <button onClick={handleClick}>Articles</button>
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
