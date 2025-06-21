import "./App.css";
import Exemple1 from "./classes/Exemple1";
import Exemple2 from "./classes/Exemple2";
import Exemple3 from "./classes/Exemple3";
import data from "./data.json";
function App() {
  const { SocialMedias, Skills, Experiences } = data;
  return (
    <div>
      <div>
        <ul>
          {SocialMedias.map((e) => {
            return <Exemple1 link={e} />;
          })}
        </ul>
      </div>
      <div>
        {Skills.map((e) => {
          return <Exemple2 titre={e.Area} skillSet={e.SkillSet} />;
        })}
      </div>
      <div>
        {Experiences.map((e) => {
          return (
            <Exemple3
              logo={e.logo}
              url={e.url}
              companyName={e.companyName}
              roles={e.roles}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
