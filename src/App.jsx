import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TempleteExpressions.jsx';
import Mycomponent from './components/MyComponet.jsx';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <div>
        <TemplateExpressions />
      </div>
      <div>
        <Mycomponent />
      </div>
    </div>
  );
}

export default App;
