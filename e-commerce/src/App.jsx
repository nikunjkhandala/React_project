import React from "react";
import Navbar from "./components/Navbar";
import Women from "./pages/Women";
import Men from "./pages/Men";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="kids" element={<Kids />} />
      </Routes>
    </div>
  );
};

export default App;
