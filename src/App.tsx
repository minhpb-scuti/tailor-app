import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contact from "./component/Contacts";
import Home from "./component/Home";
import News from "./component/News";
import ShopHomePage from "./component/ShopHomePage";
import Appointment from "./component/Appointment";
import About from "./component/About";
import AboutUs from "./component/AboutUs";
import Blog from "./component/Blog";
import NewUltimate3D from "./component/Blog/NewUltimate3D";
import MenSuit from "./component/Blog/MenSuit";
import Accessories from "./component/Services/Accessories";
import CustomTailor from "./component/Services/CustomTailor";
import SuitResizing from "./component/Services/SuitResizing";
import WeddingServices from "./component/Services/WeddingServices";
import Services from "./component/Services";
import Team from "./component/Team";
import PerterMason from "./component/Team/PerterMason";
import PollyWire from "./component/Team/PollyWire";
import RebeccaOgle from "./component/Team/RebeccaOgle";

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
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/top-10-must-tries-on-the-new-ultimate-3d"
          element={<NewUltimate3D />}
        />
        <Route
          path="/mens-suit-patterns-top-suit-patterns"
          element={<MenSuit />}
        />
        <Route path="/services/accessories" element={<Accessories />} />
        <Route path="/services/custom-tailoring" element={<CustomTailor />} />
        <Route path="/services/suit-resizing" element={<SuitResizing />} />
        <Route path="/services/wedding" element={<WeddingServices />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/team/peter-mason" element={<PerterMason />} />
        <Route path="/team/polly-wire" element={<PollyWire />} />
        <Route path="/team/rebecca-ogle" element={<RebeccaOgle />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
