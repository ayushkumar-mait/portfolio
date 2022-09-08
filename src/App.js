import Hero from './components/hero';
import Navbar from './components/navbar';
import Skills from './components/skills/skills';
import Project from './components/projects/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
function App() {
  return (
   <div className=' bg-DarkBlur'>
     <Navbar/>
      <Hero/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
   </div>
  )
}

export default App;
