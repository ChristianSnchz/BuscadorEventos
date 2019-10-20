import React  from "react";
import Header from "./Components/Header";
import CategoriasProvider from "./context/Categorias";
import EventosProvider from "./context/EventosContext";
import Formulario from "./Components/Formulario";
import ListaEventos from "./Components/ListaEventos";

function App() {
  return (
    <EventosProvider>
      <CategoriasProvider>
        <Header />

        <div className="uk-container">
          <Formulario />

          <ListaEventos/>
        </div>
      </CategoriasProvider>
    </EventosProvider>
  );
}

export default App;
