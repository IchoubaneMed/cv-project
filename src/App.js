import Form from './components/Form'
import Header from './components/Header'
import "./styles/global.css"
import Resume from './components/Resume';
import Footer from './components/Footer'


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
      <div className="cv-footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
