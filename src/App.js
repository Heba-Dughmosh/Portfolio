import "./App.css";
import { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Home from "./component/Home";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import Contact from "./component/Contact";

function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="App">
      <div className="nav">
        <TabNavItem
          title="home"
          id="home"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="skills"
          id="skills"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="projects"
          id="projects"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="contact"
          id="contact"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      <div className="container">
        <TabContent id="home" activeTab={activeTab}>
          <Home />
        </TabContent>

        <TabContent id="skills" activeTab={activeTab}>
          <Skills />
        </TabContent>

        <TabContent id="projects" activeTab={activeTab}>
          <Projects />
        </TabContent>

        <TabContent id="contact" activeTab={activeTab}>
          <Contact />
        </TabContent>
      </div>

      <div className="footer">
        <p>© Heba 2022 Germany</p>
      </div>
    </div>
  );
}

export default App;
