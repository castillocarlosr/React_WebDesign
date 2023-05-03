import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Carlos is re-learning react since it's been a few years since I had to use it.
        </a> */}
      <div class="top">
        {/* LOGO */}
        <div id="logo">
					{/* <span class="image avatar48"><img src="images/carlosProfile2.JPG" alt="A logo picture of Carlos Castillo" /></span> */}
					<h1 id="title">Carlos R. Castillo</h1>
					<p>Software Developer</p>
				</div>
        <nav id="nav">
          <ul>
					  <li><a href="#top" id="top-link"><span class="icon fa-home">Intro</span></a></li>
						<li><a href="#skills" id="portfolio-link"><span class="icon fa-code">Skills</span></a></li>
						<li><a href="#portfolio" id="portfolio-link"><span class="icon fa-th">Portfolio</span></a></li>
						<li><a href="#about" id="about-link"><span class="icon fa-user-circle">About Me</span></a></li>
						<li><a href="#resume" id="about-resume"><span class="icon fa-file-word-o">Resume</span></a></li>
						<li><a href="#github" id="github-link"><span class="icon fa-github-square">GitHub</span></a></li>
						<li><a href="#contact" id="contact-link"><span class="icon fa-envelope">Contact</span></a></li>
					</ul>
        </nav>
      </div>
      </header>
    </div>
  );
}


export default App;
