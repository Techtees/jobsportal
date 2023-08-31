import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Joblist from "./components/Joblist";
import Footer from "./components/footer";


function App() {
  return (
    <>
     <Header />
     <main className="">
      <Home />
      <Categories />
      <Joblist />
       <Footer />
     </main>
    </>
  );
}

export default App;
