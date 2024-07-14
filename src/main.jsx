import React from 'react';
import { createRoot } from 'react-dom/client'; // Используем правильный импорт
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import "./index.css"

const root = createRoot(document.getElementById('root')); // Создаем корневой элемент

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
