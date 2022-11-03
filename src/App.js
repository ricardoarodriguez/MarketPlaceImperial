import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  
  const [ equipo, setEquipo ] = useState([]);

  useEffect( () => {
    axios.get('https://www.thesportsdb.com/api/v1/json/2/search_all_teams.php?l=English%20Premier%20League')//'http://127.0.0.1:8000/clientes/'
    .then((response) => {
      setEquipo(response.data.teams);
    });
  }, []);


  return (
    <table border="1" class="App-table">
      <thead>
        <tr>
          <th>
            Nombre del Equipo
          </th>
        </tr>
      </thead>
      <tbody>
          { equipo.map( equip => {
              return (
        <tr>
          <td>{ equip.strTeam } </td>
        </tr>
            );
          })}
        </tbody>
      </table>
    );
}

export default App;
