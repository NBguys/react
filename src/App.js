import './App.css';
import Hellow from './commponent/Hellow';

function App() {
  return <div className='App'>
    <h3>props : properties</h3>
    <Hellow paramAge={10}/>
    <Hellow paramAge={20}/>
    <Hellow paramAge={30}/>
  </div>
}

export default App;
