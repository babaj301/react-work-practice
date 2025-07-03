import Login1 from "./pages/Login1";
import Login2 from "./pages/Login2";
import LandingPage from "./pages/LandingPage";
import Cart from "./pages/Cart";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ConfirmOrderModal from "./components/ConfirmOrderModal";
import OutOfStockModal from "./components/OutOfStockModal";

// import { StoreProvider } from './StoreContext';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Login1 />} />
          <Route path='/login2' element={<Login2 />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/modal" element={<OutOfStockModal />} />
          <Route path="/modal2" element={<ConfirmOrderModal />} />
        </Routes>
      </Router>

      {/* <StoreProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login1 />} />
            <Route path="/login2" element={<Login2 />} />
            <Route path="/landing/cart" element={<Cart />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </StoreProvider> */}
    </div>
  );
}

export default App;
