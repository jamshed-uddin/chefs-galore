import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";

function App() {
  return (
    <>
      <div>
        <div>
          <Header></Header>
        </div>
        <div className="pt-16">
          <Outlet />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
