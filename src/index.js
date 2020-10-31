import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App
      baseDados={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => ({
        id: id,
        descricao: `Descrição da linha ${id}`,
        valor: id * 100,
      }))}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
