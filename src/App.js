
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Joblist from "./components/Joblist";
import Footer from "./components/footer";
import JobView from "./components/JobView";
import PostJob from "./components/PostJob";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

function App() {
  return (
    <Router>
     <Header />
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
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
