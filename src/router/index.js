import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "../components/signup";
import Login from "../components/login";
import Subscribe from "../components/subscribe";
function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </Router>
    </>
  );
}
export default AppRouter;
