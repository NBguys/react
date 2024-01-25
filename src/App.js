import Header from "./commponent/Header";
import DayList from "./commponent/DayList";
import Day from "./commponent/Day";
import CreateWord from "./commponent/CreateWord";
import CreateDay from "./commponent/CreateDay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Emptypage from "./commponent/EmptyPage";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path="/" element={<DayList/>} />
          <Route path="/day/:day" element={<Day/>} />
          <Route path="/createWord" element={<CreateWord/>}/>
          <Route path="/createDay" element={<CreateDay/>}/>
          <Route path="*" element={<Emptypage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
