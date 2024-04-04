
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Joblist from "./components/Joblist";
import Footer from "./components/footer";
import JobView from "./components/JobView";
import PostJob from "./pages/PostJob";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import {AppProvider} from './backend/api'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from "./context/Auth/userAuthenticationcontext";

function App() {
  return (
    <>
      <AppProvider>
        <AuthProvider>
          <Router>
              <Header />
              <main>
                <Routes>
                  <Route exact path="/" element= {
                    <>
                      <Home />
                      <Categories />
                      <Joblist />
                    </>
                  } />
                  <Route path='/viewjob' element= {<JobView />} />
                  <Route path='/create-job' element= {<PostJob />} />
                  <Route path='/dashboard' element= {<Dashboard />} />
                  <Route path='/login' element= {<Login />} />
                  <Route path='/register' element= {<Register />} />
                  <Route path='/profile' element= {<Profile />} />
                </Routes> 
              </main>
              <Footer />
          </Router>
        </AuthProvider>
      <ToastContainer />
     </AppProvider>
    </>
  );
}

export default App;
