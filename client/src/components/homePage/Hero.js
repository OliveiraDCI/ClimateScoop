import "./hero.scss";

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
    <div class="bg-image">
      <section className="hero-section">
        <h1>Welcome to ClimateScoop</h1>
        <p>
          Explore new articles about Climate Change & create your owns if you'd
          like !
        </p>
        <button>Articles</button>
      </section>
    </div>
  );
}

function DashboardSection() {
  return (
    <section className="dashboard-section">
      <h2>Dashboard</h2>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </section>
  );
}

export default HomePage;
