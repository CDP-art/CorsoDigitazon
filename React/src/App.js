import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/homepage/homepage"
import Welcome from './components/welcome';
import Fetch from './components/fetch/Fetch';
import Hooks from './components/hooks/Hooks';
import Hooks2 from './components/hooks/Hooks2';
import Chat from "./components/chat/Chat"
import ChangeInput from './components/input/input';
import TodoList from "./components/fetchToDoList/fetchToDoList"
import SimplerTodoList from './components/simplerToDoList/simplerToDoList';
import Counter from './components/counter/counter';
import AddElements from './components/addElements/addElements';
//import CopyExcel from './components/copyExcel/copyExcel';
import SimpleChat from './components/simpleChat/simpleChat';
import WhyUseState from './components/whyUseState/WhyUseState';
import UseStateUseEffectWhy from './components/useStateUseEffectWhy/UseStateUseEffectWhy';
import RedInput from './components/redInput/RedInput';
import TooManyReRenders from './components/tooManyReRenders/TooManyReRenders';
import ComportamentoFetch from './components/comportamentoFetch/ComportamentoFetch';
import ColumnListProducts from './components/doppiaAsync/DoppiaAsync';
//import RuotaFortuna from './components/ruotaFortuna/RuotaFortuna';
import InputList from './components/input/input';
import CreazyButton from './components/creazyButton/creazyButton';
import RGB from './components/RGB/rgb';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}>
            <Route index element={<Welcome />} />
            <Route path="counter" element={<Counter />} />
            <Route path="chat" element={<Chat />} />
            <Route path="addelements" element={<AddElements />} />
            <Route path="fetch" element={<Fetch />} />
            <Route path="comportamentofetch" element={<ComportamentoFetch />} />
            <Route path="hooks" element={<Hooks />} />
            <Route path="hooks2" element={<Hooks2 />} />
            <Route path="todolist" element={<TodoList />} />
            <Route path="simplertodolist" element={<SimplerTodoList />} />
            <Route path="inputlist" element={<InputList />} />
            <Route path="whyusestate" element={<WhyUseState />} />
            <Route path="usestateuseeffectwhy" element={<UseStateUseEffectWhy />} />
            <Route path="tomanyrerenders" element={<TooManyReRenders />} />
            <Route path="redinput" element={<RedInput />} />
            <Route path="simplechat" element={<SimpleChat />} />
            <Route path="chat" element={<Chat />} />
            <Route path="changeinput" element={<ChangeInput />} />
            <Route path="columnlistproducts" element={<ColumnListProducts />} />
            <Route path="creazybutton" element={<CreazyButton />} />
            <Route path="rgb" element={<RGB />} />
            {/* <Route path="whyloopingwithmap" element={<WhyLoopingWithMap />} /> */}
            {/* <Route path="asynccall" element={<AsyncCall />} /> */}
            {/* <Route path="usestateasyncnature" element={<UseStateAsyncNature />} />
            <Route path="usestatefunctioncallback" element={<UseStateFunctionCallback />} />
            <Route path="usestateuseffect" element={<UseStateUseEffect />} /> */}
            {/* <Route path="productcolumns" element={<ProductColumns />} /> */}
            {/* <Route path="dynamicinputs" element={<DynamicInputs />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
