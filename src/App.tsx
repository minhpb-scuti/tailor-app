import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { lazy, Suspense } from "react";

const Contact = lazy(() => import("./component/Contacts"));
const Home = lazy(() => import("./component/Home"));
const News = lazy(() => import("./component/News"));
const ShopHomePage = lazy(() => import("./component/ShopHomePage"));
const Appointment = lazy(() => import("./component/Appointment"));
const About = lazy(() => import("./component/About"));
const AboutUs = lazy(() => import("./component/AboutUs"));
const Blog = lazy(() => import("./component/Blog"));
const NewUltimate3D = lazy(() => import("./component/Blog/NewUltimate3D"));
const MenSuit = lazy(() => import("./component/Blog/MenSuit"));
const Accessories = lazy(() => import("./component/Services/Accessories"));
const CustomTailor = lazy(() => import("./component/Services/CustomTailor"));
const SuitResizing = lazy(() => import("./component/Services/SuitResizing"));
const WeddingServices = lazy(
  () => import("./component/Services/WeddingServices")
);
const Services = lazy(() => import("./component/Services"));
const Team = lazy(() => import("./component/Team"));
const PerterMason = lazy(() => import("./component/Team/PerterMason"));
const PollyWire = lazy(() => import("./component/Team/PollyWire"));
const RebeccaOgle = lazy(() => import("./component/Team/RebeccaOgle"));
const Shop = lazy(() => import("./component/shop"));
const Product1 = lazy(() => import("./component/shop/Product1"));
const Product5 = lazy(() => import("./component/shop/Product5"));
const Product6 = lazy(() => import("./component/shop/Product6"));
const Product4 = lazy(() => import("./component/shop/Product4"));
const Product3 = lazy(() => import("./component/shop/Product3"));
const Product2 = lazy(() => import("./component/shop/Product2"));
const ShopBoxed = lazy(() => import("./component/ShopBoxed"));
const SummerShirt = lazy(() => import("./component/Blog/SummerShirt"));
const StyleTip = lazy(() => import("./component/Blog/StyleTip"));
const ChooseTie = lazy(() => import("./component/Blog/ChooseTie"));
const CustomShirts = lazy(() => import("./component/Blog/CustomShirts"));
const Quotes = lazy(() => import("./component/Blog/Quotes"));
const PrinceOfWales = lazy(() => import("./component/Blog/PrinceOfWale"));
const MadHatter = lazy(() => import("./component/Blog/MadHatter"));
const SummerTweed = lazy(() => import("./component/Blog/SummerTweed"));
const ColorSuits = lazy(() => import("./component/Blog/ColorSuits"));
const JacketBlazers = lazy(() => import("./component/Blog/JacketBlazers"));
const NorthwestSuit = lazy(() => import("./component/Blog/NorthwestSuits"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loadding Page</div>}>
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
          <Route path="/the-white-mad-hatter/" element={<MadHatter />} />
          <Route path="/summer-tweed/" element={<SummerTweed />} />
          <Route
            path="/how-to-properly-button-suit-jackets-blazers/"
            element={<JacketBlazers />}
          />
          <Route
            path="/recreating-cary-grants-north-by-northwest-suit/"
            element={<NorthwestSuit />}
          />

          <Route
            path="/what-colour-shoes-to-wear-with-your-suit/"
            element={<ColorSuits />}
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
      </Suspense>
    </BrowserRouter>
  );
};
export default App;
