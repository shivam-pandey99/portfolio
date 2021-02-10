
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './component/Navbar'
import Header from './component/header'
import About from "./component/About";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Project from './component/projects'
import Skills from './component/skill';
import Totop from './component/Totop';


function App() {
return (
    <> 
<Navbar/>
<Header/>
<About/>
<Project/>
<Skills/>
<Contact/>
<Totop/>
<Footer />
    </>
);
}

export default App;
 