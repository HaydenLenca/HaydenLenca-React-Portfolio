import React from 'react';

function Project({project}) {
  const {title, image, github, deploy, description} = project;

  return (
    <div key={title} className="col-lg-4 col-md-6 mb-4">

    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        
      </div>
      <div className="card-footer">
        <a href={github} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
      <div>
        <a href={deploy} target="_blank" rel="noreferrer">
          Deployed Link
        </a>
      </div>
    </div>
    <div>
      <p>{description}</p>
      </div>
  </div>
  );
}

export default Project;