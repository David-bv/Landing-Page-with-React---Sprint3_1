import CardGrid from "../components/CardGrid";
import Comments from "../components/Comments";
import Footer from "../components/Footer";
import GetStarted from "../components/GetStarted";
import NavBar from "../components/NavBar";
import StayProductive from "../components/StayProductive";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <GetStarted/>
      <CardGrid/>
      <StayProductive/>
      <Comments/>
      <Footer/>
    </div>
  );
}

export default App;
