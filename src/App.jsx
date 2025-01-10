import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Sidebar from "./components/Sidebar.jsx";
import ProductPage from "./components/ProductPage.jsx";
import Homepage from "./pages/Homepage.jsx";
import Trade from "./pages/Admin/Trade.jsx";
import Event from "./pages/Admin/Event.jsx";
import Login from "./pages/Login.jsx";
import ProductTableTrade from "./pages/Admin/ProductTableTrade.jsx";
import ProductTableEvents from "./pages/Admin/ProductTableEvents.jsx";
import TradeGallery from "./pages/Trade.tsx";
import EventsGallery from "./pages/Events.tsx";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
AOS.init();

const AppLayout = () => {
  const location = useLocation();

  // Check if the current route requires a sidebar
  const showSidebar =
    location.pathname === "/admin/trade" ||
    location.pathname === "/admin/event" ||
    location.pathname === "/admin/producttable/trade" ||
    location.pathname === "/admin/producttable/events";

  // Check if the current route is one of the admin routes
  const isAdminRoute =
    location.pathname === "/admin/trade" ||
    location.pathname === "/admin/event";

  return (
    <div style={{ display: "flex", backgroundColor: "#fff0d1" }}>
      {showSidebar && <Sidebar />}
      <main
        style={{
          backgroundColor: "#fff0d1",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: showSidebar ? 0 : 0,
          width: "100%",
          // Apply height and paddingTop only for admin routes
          height: isAdminRoute ? "auto" : "100vh",
          paddingTop: isAdminRoute ? "15%" : "0",
        }}
      >
        <Routes>
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery/trade" element={<TradeGallery />} />
          <Route path="/gallery/events" element={<EventsGallery />} />
          <Route path="/admin" element={<Login />} />
          {/* Private Routes */}
          <Route
            path="/admin/producttable/trade"
            element={
              <PrivateRoute>
                <ProductTableTrade />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/producttable/events"
            element={
              <PrivateRoute>
                <ProductTableEvents />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/trade"
            element={
              <PrivateRoute>
                <Trade />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/event"
            element={
              <PrivateRoute>
                <Event />
              </PrivateRoute>
            }
          />
        </Routes>
      </main>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
};

export default App;
