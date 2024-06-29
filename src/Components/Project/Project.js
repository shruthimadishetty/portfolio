import React from "react";
import project from "../Data/Project.json";
import "./Project.css";

const Project = () => {
  return (
    <>
      <div className="container_projects" id="projects">
        <h1>PROJECTS</h1>
        <div className="project_cards">
          {project.map((data) => (
            <>
              <div key={data.id} className="project_card_items">
                <div
                  className="cards_info"
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="image_container">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="cards-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a
                      href={data.demo}
                      className="btn btn-primary mx-3"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Demo
                    </a>
                    <a
                      href={data.source}
                      className="btn btn-warning"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
