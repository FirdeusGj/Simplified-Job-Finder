import { useLocation } from "react-router-dom";
import "./SearchedJob.css";
import { jobList } from "../Datas/JobsData";

export default function SearchedJob() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const id = params.get("q") || "";

  const results = jobList.filter(
    (elem) =>
      elem.title.toLowerCase().includes(id.toLowerCase()) ||
      elem.skills.some((skill) =>
        skill.toLowerCase().includes(id.toLowerCase())
      )
  );

  console.log(jobList.map((elem) => elem.skills));
  return (
    <div className="search-result">
      <h2 className="search-heading">
        {id ? `Search results for "${id}"` : "All Jobs"}
      </h2>

      {results.length === 0 && (
        <p className="no-results">No jobs found matching your search.</p>
      )}

      <div className="search-results-list">
        {results.map((elem) => (
          <div key={elem.id} className="searched-card">
            <div className="searched-header">
              <h3>{elem.title}</h3>
              <span className="match">{elem.match}% Match</span>
            </div>

            <p className="company">{elem.company}</p>
            <p className="location">{elem.location}</p>
            <p className="description">{elem.description}</p>

            <div className="skills">
              {elem.skills.map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <div className="job-footer">
              <button className="apply-btn">Quick Apply</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
