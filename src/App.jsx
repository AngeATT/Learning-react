import { useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [stateContent, setContent] = useState();

  function handleClick(selectedButton) {
    setContent(selectedButton);
  }
  function handleActive(value) {
    return stateContent === value;
  }
  let tabContent = <p>Please select a topic !</p>;
  if (stateContent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[stateContent].title}</h3>
        <p>{EXAMPLES[stateContent].description}</p>
        <pre>
          <code>{EXAMPLES[stateContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <section id="core-concepts">
          <ul>
            {CORE_CONCEPTS.map((item) => {
              return <CoreConcept key="" {...item} />;
            })}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={handleActive("components")}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={handleActive("jsx")}
              onSelect={() => handleClick("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={handleActive("props")}
              onSelect={() => handleClick("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={handleActive("state")}
              onSelect={() => handleClick("state")}
            >
              State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
