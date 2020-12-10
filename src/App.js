import React, {Fragment} from "react";
import Curso from './Curso'
import './styles/styles.scss'



const App = ()=>(

  <>
      <div className="main-banner img-container s-mb-2" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" alt="Banner" src="https://wallpaperset.com/w/full/a/4/6/49091.jpg" />
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Cursos de Technosoft</p>
              <p> El Futuro En Tus Manos</p>
              <a href="#" className="button">Registrarse</a>
            </div>
          </div>
        </div>
      </div>

      <div className="ed-grid s-grid-3">
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
        <Curso />
      </div>


  </>
  
)


export default App;
