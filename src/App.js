import Form from './components/Form'
import Header from './components/Header'
import "./styles/global.css"
import Resume from './components/Resume';


function App() {
  return (
    <div className="cv-wrapper">
      <div className="cv-header">
        <Header />
      </div>
      <div className="cv-form">
        <Form />
      </div>
      <div className="resume">
        <Resume />
      </div>
    </div>
  );
}

export default App;
