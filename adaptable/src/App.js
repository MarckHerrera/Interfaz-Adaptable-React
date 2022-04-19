import './scss/App.scss';
import $ from 'jquery';
import React from 'react';
import hielo from "./assets/6c7f8e94c02163d071eaf377d588e6b6-ilustracion-realista-de-cubo-de-hielo.png";

function App() {



  return (
    <div className="App">

<nav class="sticky navbar">
  <div class="brand  display__logo">
    <a href="#top" class="nav__link"> <span class="logo"> <img src={hielo} height="50"/> Blue Ice Te</span></a>
  </div>

  <input type="checkbox" id="nav" class="hidden" />
  <label for="nav" class="nav__open"><i></i><i></i><i></i></label>
  <div class="nav">
    <ul class="nav__items">
      <li class="nav__item"><a class="nav__link">Inicio</a></li>
      <li class="nav__item"><a class="nav__link">Pronosticos</a></li>
      <li class="nav__item"><a class="nav__link">Estadisticas</a></li>
      <li class="nav__item"><a class="nav__link">Contactanos</a></li>
    </ul>
  </div>
</nav>

    <body>
  <div class="page-wrap">
    <main class="page-main">
      <article>
        <div class="section">
          <div class="article-header">
            <h1>Blue Ice Te</h1>
            <h2>¿En que se basa nuestra empresa? </h2>
            <p>BIT es una empresa basada en la recoleccion de estadisticas atmosfericas en todo el pais, para asi poder influir en distintas empresas que requieren estar informadas referente a los grados y posibles situaciones climaticas.</p>
          </div>
        </div>
        <div class="section">
          <div class="article-content">
            <p class="caption">Como trabajamos</p>
            <p>Utilizamos diversos grupos de cientificos totalmente calificados en el ambito metereologico,</p>
            <p>quienes utilizan diversos tipos de herremientas de trabajo, desde barometros, termostatos y entre muchas formas que tenemos para conseguir un estandar de presicion,</p>
            <p>dicho estandar de precision tambien se basa en la prevencion de frentes frios y olas intensas de calor.</p>
            <p>A su vez tambien aportamos utilez que ayudan a la preservacion de los productos y/o amueblados, entre muchos otros productos que logramos proteger.</p>
           
           
           
          </div>
        </div>
      </article>
    </main>

    
    <footer class="page-footer nav">
      <div class="content " >

        <nav >
          <div class="link-list ">
            <a>Yumis</a>
            <a>Tortrix</a>
            <a>Coca Cola</a>
            <a>Pepsi</a>
          </div>
          <div class="icon-container">
            <span class="material-icons">Empresas</span>
            <h4>Asociadas</h4>
          </div>
        </nav>
        <nav >
          <div class="link-list ">
            <a>Guatemala</a>
            <a>Solola</a>
            <a>San Marcos</a>
          </div>
          <div class="icon-container">
            <span class="material-icons-outlined">Direcciones</span>
            <h4>Lugares</h4>
          </div>
        </nav>
        <nav>
          <div class="link-list">
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Twitter</a>
          </div>
          <div class="icon-container">
            <span class="material-icons-outlined">Sitios Web</span>
            <h4>Links</h4>
          </div>
        </nav>
      </div>
    </footer>
  </div>
  

    </body>
    </div>
  );
}

export default App;
