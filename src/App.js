import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ConnectWallet from "./screens/ConnectWallet";
import CreatorProfile from "./screens/CreatorProfile";
import FAQ from "./screens/FAQ";
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import SignUp from "./screens/SignUp";
import Explore from "./screens/Explore";
import RestrictedRoute from "./components/RestrictedRoute";
import Dashboard from "./screens/Dashboard";
import Create from "./screens/Create";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/connect" element={<ConnectWallet />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/faq" element={<FAQ />} />
        {/* <Route element={<RestrictedRoute />}> */}
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:username" element={<CreatorProfile />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
};

export default App;
