import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar';
import Homepage from './components/homepage';
import Smartphone from './pages/smartphone';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Homepage />}></Route>
            <Route path="/smartphones" element={<Smartphone />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//Sono riuscito a fare solamente il primo collegamento della pagina smartphone. Purtroppo ho perso tanpo tempo a capire come poter prendere le chiavi dagli oggetti. Un po' i tanti errori che mi tirava fuori e dovevo capire di cosa si trattasse. Un po' l'ansia.
//per mancanza di tempo non sono riuscito a fare un ottimo css ed a rispettare la ui. Diciamo che nel complesso è abbastanza ordinato.
//Ho suddiviso in componenti e ho capito come utilizzare react router e a fare le chiamate asincrone. 
//Avevo in mente di farlo molto più ampliato, ma peccato per la mia lentezza

export default App;
