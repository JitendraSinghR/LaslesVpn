import "./App.css";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import Navbar from "./components/Navbar/Navbar";
import Network from "./components/Network/Network";
import Plans from "./components/Plans/Plans";
import Testimonials from "./components/Testimonials/Testimonials";
import Users from "./components/Users/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <Users />
      <Features />
      <Plans />
      <Network />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
