import React, { useEffect, useState } from "react";
import "./Jobs.css";
import { jobList } from "../Datas/JobsData";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const chunked = [];
    for (let i = 0; i < jobList.length; i += 10) {
      chunked.push(jobList.slice(i, i + 10));
    }
    setJobs(chunked);
  }, []);

  const handleButtonClick = (page) => {
    setCurrentPage(page);
    console.log("Page:", page);
  };

  const buttons = Array.from({ length: jobs.length }, (_, index) => (
    <button
      key={index}
      style={{
        border: currentPage === index + 1 ? "1px solid #00bfa6" : "none",
        backgroundColor: currentPage === index + 1 ? "transparent" : "",
        color: currentPage === index + 1 ? "#007f7d" : "",
        cursor: "pointer",
      }}
      onClick={() => handleButtonClick(index + 1)}
    >
      {index + 1}
    </button>
  ));

  return (
    <div className="jobs-container">
      <h2>Available Jobs</h2>

      {jobs.length > 0 &&
        jobs[currentPage - 1]?.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-header">
              <h3>{job.title}</h3>
              <span className="match">{job.match}% Match</span>
            </div>

            <p className="company">{job.company}</p>
            <p className="location">{job.location}</p>

            <div className="skills">
              {job.skills.map((skill, index) => (
                <span key={index} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <div className="job-footer">
              <button className="apply-btn">Quick Apply</button>
            </div>
          </div>
        ))}

      <div className="job-buttons-wrapper">
        <button>{"<"}</button>
        {buttons}
        <button>{">"}</button>
      </div>
    </div>
  );
}
