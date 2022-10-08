import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contact from "./component/Contacts";
import Home from "./component/Home";
import News from "./component/News";
import ShopHomePage from "./component/ShopHomePage";
import Appointment from "./component/Appointment";
import About from "./component/About";
import AboutUs from "./component/AboutUs";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/news" element={<News />} />
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/shop-homepage" element={<ShopHomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
