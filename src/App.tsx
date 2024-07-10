import Body from "./components/Body";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="w-screen overflow-x-hidden">
      <TopBar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
