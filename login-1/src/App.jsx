import Login1 from './pages/Login1';
import Login2 from './pages/Login2';
import LandingPage from './pages/LandingPage';
import Cart from './pages/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// import { StoreProvider } from './StoreContext';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login1 />} />
          <Route path="/login2" element={<Login2 />} />
          <Route path="/landing/cart" element={<Cart />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="*" element={<Navigate to="/" />} />
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
