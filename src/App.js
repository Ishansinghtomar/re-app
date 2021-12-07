import logo from './logo.svg';
import './App.css';


let name1="ishan"
function App() {
  return (
    <>
    <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">News App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Home</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Contact</a>
        <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default App;
