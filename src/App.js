import ContactInformation from "./components/ContactInformation";
import "./styles/global.css"
import './styles/forms.css';
import SummaryStatement from "./components/SummaryStatement";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";

function App() {
  return (
    <div>
      <ContactInformation />
      <SummaryStatement />
      <WorkExperience />
      <Education />
    </div>
  );
}

export default App;
