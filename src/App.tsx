import { Footer } from "./components/navigation/footer/Footer";
import { Navbar } from "./components/navigation/navbar/Navbar";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
