import React from 'react';
import './App.css';

const heroes = [
  {
    id: 1,
    name: 'Batman',
    owner: 'DC'
  },
  {
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel'
  },
  {
    id: 3,
    name: 'Superman',
    owner: 'DC'
  },
  {
    id: 4,
    name: 'Flash',
    owner: 'DC'
  },
  {
    id: 5,
    name: 'Wolverine',
    owner: 'Marvel'
  }
];

const styles = {
  body: {
    minHeight: '100vh',
    backgroundColor: '#e6f3ff',
    margin: '0',
    padding: '20px'
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  componentBox: {
    backgroundColor: 'white',
    border: '2px solid #0066cc',
    padding: '16px',
    borderRadius: '8px',
    marginBottom: '16px',
    width: '400px',
    textAlign: 'center'
  },
  title: {
    color: '#0066cc',
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '10px'
  },
  subtitle: {
    color: '#0066cc',
    fontWeight: 'bold',
    fontSize: '18px',
    marginBottom: '8px'
  },
  text: {
    color: '#0066cc',
    margin: '5px 0'
  }
};

const HolaMundo = () => {
  return (
    <div style={styles.componentBox}>
      <h1 style={styles.subtitle}>Hola Mundo</h1>
    </div>
  );
};

const ComponenteConVariables = () => {
  const nombre = "Alejandro";
  const edad = 21;
  
  return (
    <div style={styles.componentBox}>
      <h2 style={styles.subtitle}>Componente con Variables</h2>
      <p style={styles.text}>Nombre: {nombre}</p>
      <p style={styles.text}>Edad: {edad}</p>
    </div>
  );
};

const ComponenteConImportacion = () => {
  return (
    <div style={styles.componentBox}>
      <h2 style={styles.subtitle}>Lista de Héroes</h2>
      {heroes.map(hero => (
        <div key={hero.id} style={{borderBottom: '1px solid #ccc', paddingBottom: '8px', marginBottom: '8px'}}>
          <p style={styles.text}>
            <strong>{hero.name}</strong> - {hero.owner}
          </p>
        </div>
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h1 style={{...styles.title, textAlign: 'center', marginBottom: '30px'}}>
          Lab 2 - Primer React
        </h1>
        
        <HolaMundo />
        <ComponenteConVariables />
        <ComponenteConImportacion />
      </div>
    </div>
  );
}