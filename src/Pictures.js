import React from "react";

export default function Pictures(props) {
  if (props.pictures) {
    console.log(props.pictures);
    return (
      <section className="Pictures">
        <div className="row">
          {props.pictures.map(function (photo, index) {
            return (
              <div className="col-4" key={index}>
                <a href={photo.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={photo.src.landscape}
                    alt="photos"
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
