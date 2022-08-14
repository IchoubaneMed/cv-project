import Form from './components/Form'
import Header from './components/Header'
import "./styles/global.css"

function App() {
  return (
    <div className="cv-wrapper">
      <div className="cv-header">
        <Header />
      </div>
      <div className="cv-form">
        <Form />
      </div>   
    </div>
  );
}

export default App;
