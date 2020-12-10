import React from 'react'
import './styles/styles.scss'
import PropTypes from 'prop-types'




const Curso = ({image, title, price, profesor})=>(
    <article className="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src={image} alt=""/> 
          </div>
          <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
                {title}
            </h3>
            <div className="s-main-center">
                {`Profe.: ${profesor}`}
            </div>
                <div className="s-main-center">
                <a className="button--ghost-alert button--tiny" href="#">$ {price}</a>
                </div>
          </div>
        </article>

)

Curso.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.string,
    profesor: PropTypes.string
}

Curso.defaultProps ={
    title:"No hay titulo",
    image:"https://edteam-media.s3.amazonaws.com/specialities/medium/fd2746a1-413d-4435-a084-24493adbd20b.png",
    price: "$ 0.00 USD",
    profesor: "No tiene profesor"
}

export default Curso