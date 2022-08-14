import ContactInformation from "./components/ContactInformation";
import "./styles/global.css"
import './styles/forms.css';
import SummaryStatement from "./components/SummaryStatement";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <ContactInformation />
      <SummaryStatement />
      <WorkExperience />
      <Education />
      <Skills />
    </div>
  );
}

export default App;
