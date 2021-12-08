import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  return (
    <>

<Navbar home="home"/>
<Alert/>
<About/>
<div className="container">
<TextForm heading="Feedback Form"/>
</div>

    </>
  );
}

export default App;
