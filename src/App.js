
import Header from "./components/Header";
import {BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Joblist from "./components/Joblist";
import Footer from "./components/footer";
import JobView from "./components/JobView";


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
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
