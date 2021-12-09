import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import HomeScreen from "./HomeScreen";
import PrivacyPolicyScreen from "./PrivacyPolicyScreen";
<<<<<<< HEAD

import EditProfile from "./components/ProfileScreen/EditProfile";
import ProfileComponent from "./components/ProfileScreen/ProfileComponent";
import {Provider} from "react-redux";
import profile from "./reducers/profile";


const reducer = combineReducers({profile: profile})
const store = createStore(reducer);

function App() {
  return (
      <>
          <Provider store={store}>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route path="/" element={<HomeScreen/>} />
                        <Route path="/privacy" element={<PrivacyPolicyScreen/>} />
                        <Route path="/profile" element={<ProfileComponent/>} />
                        <Route path="/EditProfile" element={<EditProfile/>} />
                    </Routes>
                </div>
            </BrowserRouter>
          </Provider>
      </>
=======
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
>>>>>>> b25be9caa5217260141eb30a89020f5c0d4ddb6d
  );
}

export default App;
