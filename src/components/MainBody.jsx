import React from "react";
import "./MainBody.css";
import { jobList } from "../Datas/JobsData";

function MainBody() {
  // pick 5 random jobs from the list
  const randomJobs = [...jobList].sort(() => 0.5 - Math.random()).slice(0, 5);

  return (
    <main className="main-body">
      <section className="intro">
        <h1>Find Your Next Job Easily</h1>
        <p>Browse through verified listings and apply with a single click.</p>
      </section>

      <section className="job-list-placeholder">
        <h2>Featured Jobs</h2>

        <div className="job-list">
          {randomJobs.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-card-skills-wrapper">
                <h3>{job.title}</h3>
                <div>
                  {job.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <p className="company">{job.company}</p>
              <p className="location">{job.location}</p>
              <div className="skills"></div>
              <p className="desc">{job.description}</p>
              <button className="apply-btn">Quick Apply</button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default MainBody;
