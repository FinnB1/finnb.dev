import logo from './logo.svg';
import './App.css';
import background from './background.mp4';
import Button from "react-bootstrap/Button";
import {FaLinkedinIn, FaGithub, FaRegEnvelope} from "react-icons/fa";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function App() {
  return (
      <div className="video-container">
          <video autoPlay playsInline muted loop className='video'>
              <source src ={background} type="video/mp4" />
          </video>
          <header>

          <div className="overlay mx-auto">
              <Col className="column">
                      <h1>
                          Finn Butler
                      </h1>
                          <Button onClick={() => window.open( "https://github.com/FinnB1", "_blank")} className="mx-2 custom-button">
                              <FaGithub/>
                          </Button>
                         <Button onClick={() => window.open( "https://www.linkedin.com/in/finnbutler1/", "_blank")} className="mx-2 custom-button">
                              <FaLinkedinIn/>
                         </Button>
                        <Button onClick={() => window.open( "mailto:finn.butler@warwick.ac.uk", "_blank")} className="mx-2 custom-button">
                            <FaRegEnvelope/>
                        </Button>
              </Col>

          </div>

          </header>
      </div>
  );
}

export default App;
