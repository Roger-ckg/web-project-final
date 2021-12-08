import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import PrivacyPolicyScreen from "./PrivacyPolicyScreen";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import SearchScreen from "./components/SearchScreen/SearchScreen";
import DetailsScreen from "./components/SearchScreen/DetailsScreen";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
              <Route path="/" element={<HomeScreen/>} />
                <Route path="/search" element={<SearchScreen/>} />
                <Route path="/search/:searchTerm" element={<SearchScreen/>}/>
                <Route path="/details/:id" element={<DetailsScreen/>}/>
              <Route path="/privacy" element={<PrivacyPolicyScreen/>} />
                <Route path="/profile" element={<ProfileScreen/>} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
