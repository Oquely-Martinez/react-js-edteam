import React from 'react'
import './styles/styles.scss'

const Curso = ()=>(
    <article className="card">
          <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
            <img src="https://edteam-media.s3.amazonaws.com/courses/medium/61e5a210-8dab-412e-a6dc-802c070cc18c.jpg" alt=""/> 
          </div>
          <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">
              Javascript Desde Cero
            </h3>
            <div className="s-mb-2 s-main-center">
              <div className="card__teacher s-cross-center">
                <div className="card__avatar s-mr-1">
                  <div className="circle img-container">
                    <img src="https://edteam-media.s3.amazonaws.com/users/thumbnail/c2be732e-7341-49ea-8f49-6cc461c42ca4.png" alt=""/>
                  </div>
                </div>
                <span className="small">Alexys Lozada</span>
              </div>
            </div>
            <div className="s-main-center">
              <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
            </div>
          </div>
        </article>

)

export default Curso