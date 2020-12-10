import React, {Fragment} from "react";
import Curso from './Curso'
import './styles/styles.scss'

const cursos = [
  {
    title: "Klotin desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/medium/d793ee5a-9dd1-4a3a-9c82-9b08a5f89a52.png",
    price: "20 USD",
    profesor: "José Dimas Luján"
  }, 
  {
    title: "Html Canvas",
    image: "https://edteam-media.s3.amazonaws.com/courses/big/c574aade-f5b4-42ae-9d92-6b05e7919f4d.png",
    price: "30 USD",
    profesor: "Diego Adrian"
  }, 
  {
    title: "Mi primer arquitectura AWS",
    image: "https://edteam-media.s3.amazonaws.com/courses/big/dd7bcebe-4e99-4b50-a75a-ff47eb6dad1a.png",
    price: "25 USD",
    profesor: "Gerardo Castro"
  },
  {
    title: "Linux desde cero",
    image: "https://edteam-media.s3.amazonaws.com/courses/medium/5ffc4c77-cbc3-476d-9c18-e180882a52c9.jpg",
    price: "15 USD",
    profesor: "Diego Bastidas"}
]

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
      <Curso 
        image="https://edteam-media.s3.amazonaws.com/specialities/medium/a2058c16-73f8-4ea4-ad16-5f9bcbae5147.jpg" 
        title="PHP Programador Backend" 
        price="$20 USD"
        profesor="Darwin Martinez"/>

        <Curso />
        

        {
          cursos.map(curso=>
            <Curso 
            title={curso.title} 
            image={curso.image}
            price={curso.price}
            profesor={curso.profesor} />
          )
        }
        
      </div>


  </>
  
)


export default App;
