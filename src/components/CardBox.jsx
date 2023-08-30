import React from 'react';


const CardBox = (props) =>{
    return(
        <div className="card">
        <div className="img">
            <img src={props.poster} alt="poster" width="100px" height="100px"/>
          </div>
          <div className="title">
            <h1>
              {props.title}
              </h1>
            </div>
            <div className="description">
              <p>
                {props.description}
                </p>
              </div>
              <div className="btn">
                <a href={props.url} target='_blank'>
                  Live Preview
                </a>
                </div>
        </div>
    )
};

export default CardBox;