
import HeroSection from "../src/components/heroSection";
import './App.css';
import Navbar from './components/navbar';
import Card from "./components/card";
import Grid from "./components/grid";
import Footer from "./components/footer";

function App() {
  return (
    <>
    <Navbar></Navbar>
      <HeroSection />
      <Card></Card>
      <Grid></Grid>
      <Footer></Footer>
    </>
  );
}

export default App;
