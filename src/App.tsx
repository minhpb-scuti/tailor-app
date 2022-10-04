import { Route, BrowserRouter, Routes } from "react-router-dom";
import Contact from "./component/Contacts";
import Home from "./component/Home";
import News from "./component/News";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
