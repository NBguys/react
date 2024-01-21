import './App.css';
import Hellow from './commponent/Hellow';
import style from './App.module.css';

function App() {
  return <div className='App'>
    <Hellow></Hellow>
    <div className={style.box}>App</div>
  </div>
}

export default App;
