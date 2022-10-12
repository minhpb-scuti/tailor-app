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
import Shop from "./component/shop";
import Product1 from "./component/shop/Product1";
import Product5 from "./component/shop/Product5";
import Product6 from "./component/shop/Product6";
import Product4 from "./component/shop/Product4";
import Product3 from "./component/shop/Product3";
import Product2 from "./component/shop/Product2";
import ShopBoxed from "./component/ShopBoxed";
import SummerShirt from "./component/Blog/SummerShirt";
import StyleTip from "./component/Blog/StyleTip";
import ChooseTie from "./component/Blog/ChooseTie";
import CustomShirts from "./component/Blog/CustomShirts";
import Quotes from "./component/Blog/Quotes";
import PrinceOfWales from "./component/Blog/PrinceOfWale";

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
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop-boxed" element={<ShopBoxed />} />
        <Route
          path="/product/slim-fit-2pc-black-mini-checkered-suit/"
          element={<Product1 />}
        />
        <Route
          path="/product/modern-fit-2pc-ultra-black-suit/"
          element={<Product2 />}
        />
        <Route
          path="/product/slim-fit-3pc-solid-blue-suit/"
          element={<Product3 />}
        />
        <Route
          path="product/traditional-fit-2pc-brown-suit/"
          element={<Product4 />}
        />
        <Route
          path="/product/luxury-fit-3pc-black-solid-suit/"
          element={<Product5 />}
        />
        <Route
          path="/product/exclusive-fit-3pc-dark-blue-suit/"
          element={<Product6 />}
        />
        <Route
          path="/top-10-must-tries-on-the-new-ultimate-3d"
          element={<NewUltimate3D />}
        />
        <Route
          path="/mens-suit-patterns-top-suit-patterns"
          element={<MenSuit />}
        />
        <Route
          path="/3-steps-to-creating-the-perfect-summer-shirt"
          element={<SummerShirt />}
        />
        <Route
          path="/15-suit-style-tips-every-man-must-know/"
          element={<StyleTip />}
        />
        <Route path="/how-to-choose-a-tie-8-steps/" element={<ChooseTie />} />
        <Route
          path="/custom-shirts-summer-2016-must-haves/"
          element={<CustomShirts />}
        />
        <Route
          path="/10-essential-quotes-about-mens-style/"
          element={<Quotes />}
        />
        <Route path="/prince-of-wales/" element={<PrinceOfWales />} />

        <Route path="/services/accessories" element={<Accessories />} />
        <Route path="/services/custom-tailoring" element={<CustomTailor />} />
        <Route path="/services/suit-resizing" element={<SuitResizing />} />
        <Route path="/services/weddings" element={<WeddingServices />} />
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
