import React, { Component } from "react";
import axios from "axios";

const EventosContext = React.createContext();
export const EventosConsumer = EventosContext.Consumer;

class EventosProvider extends Component {
  token = "UNI22LQHNFWVXLHXXITO";
  ordenar = "date";
  state = {
    eventos: []
  };

  ObtenerEventos = async (busqueda) => {
    let url = `https://www.eventbriteapi.com/v3/events/search/?token=${this.token}&q=${busqueda.nombre}
&categories=${busqueda.categoria}&sort_by=${this.ordenar}&locale=es_ES`;

    // consultar la api con la url
    let eventos = await axios.get(url); 

    console.log(eventos);

     this.setState({
      eventos: eventos.data.events
    }); 
  };

  render() {
    return (
      <EventosContext.Provider
        value={{
          eventos: this.state.eventos,
          ObtenerEventos: this.ObtenerEventos
        }}
      >
        {this.props.children}
      </EventosContext.Provider>
    );
  }
}

export default EventosProvider;
