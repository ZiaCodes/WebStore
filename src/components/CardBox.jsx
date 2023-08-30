import React from 'react';


const CardBox = (props) =>{
    return(
        <div className="card">
        <div className="img">
            <img src={props.poster} alt="poster"/>
          </div>
          <div className="title">
            <h1>
              {props.name}
              </h1>
            </div>
            <div className="description">
              <p>
                {props.description}
                </p>
              </div>
              <div className="btn">
                <a href={props.url}>
                  Live Preview
                </a>
                </div>
        </div>
    )
};

export default CardBox;