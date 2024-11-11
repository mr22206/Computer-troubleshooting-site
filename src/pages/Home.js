import Welcome from '../components/Home/Welcome';
import Services from '../components/Home/Services';
import '../styles/pages/Home.css';

function Home() {
  return (
    <div className="home">
      <Welcome />
      <Services />
    </div>
  );
}

export default Home;