import ContactInformation from "./components/ContactInformation";
import "./styles/global.css"
import './styles/forms.css';
import SummaryStatement from "./components/SummaryStatement";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div>
      <ContactInformation />
      <SummaryStatement />
      <WorkExperience />
    </div>
  );
}

export default App;
