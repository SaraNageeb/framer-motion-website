 import About from "./sections/About";
import Starter from "./sections/Starter";
import Why from "./sections/Why";
import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Blogs from "./sections/Blogs";

function App() {
  return (
    <div className="App">
     <Starter/>
     <About/>
     <Why/>
     <Testimonials />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
