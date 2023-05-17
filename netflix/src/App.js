import Navbar from "./Components/Navbar";
import "./App.css"
import Banner from "./Components/Banner";
import Rowpost from "./Components/Rowpost";
import { action,originals } from "./urls";


function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Rowpost  url={originals} title='Netflix Originals'/>
     <Rowpost url={action} title="Action" isSmall={true} />
    </div>
  );
}

export default App;
