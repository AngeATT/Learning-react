import { useState } from 'react';
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx';
function App() {
  const selectedContent = "Please select a menu";
  const [stateContent, setContent] = useState(selectedContent);
  

  function handleClick(selectedButton){
    setContent(selectedButton);
 }
  return (
    <div>
      <Header />
      <main>
        <h2>Core concepts</h2>
        <section id='core-concepts'>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}/>
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")}>Components</TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
          </menu>
           {stateContent}
        </section>
      </main>
    </div>
  );
}

export default App;
