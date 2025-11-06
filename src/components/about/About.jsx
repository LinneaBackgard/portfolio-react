import React from "react";
import "./about.css";
import profilbild_hatt from "../../assets/images/profilbild_hatt.jpeg";

const About = () => {
  return (
    <section className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img
          src="https://img.icons8.com/ios-filled/50/000000/about.png"
          alt="about icon"
        />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profilbild_hatt} alt="about me" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am Linnéa, a data analyst and developer based in Sweden. I love
              solving problems and turning complex data into actionable insights.
              With a background in teaching and creative projects, I’ve learned 
              to combine structure with creativity. Today I apply that same mindset 
              to my work in data and development — turning curiosity into insight. 
            </p>
            <p>
              I enjoy working both in teams and independently, and I’m always
              eager to learn and grow — personally and professionally.
            </p>
          </div>

          {/* Skills */}
          <div className="about-skills">
            <h2>Skills</h2>
            <ul>
              <li>
                <strong>Data Analysis:</strong> Power BI, Python (pandas, numpy,
                scikit-learn, matplotlib, seaborn), R
              </li>
              <li>
                <strong>Machine Learning:</strong> Predictive
                modeling, statistical analysis, TensorFlow, Keras
              </li>
              <li>
                <strong>Backend:</strong> C#, .NET, Entity Framework, Flask,
                Django, Databricks, Azure DevOps (CI/CD)
              </li>
              <li>
                <strong>Frontend:</strong> HTML, CSS, JavaScript, React
              </li>
              <li>
                <strong>Data Engineering:</strong> ETL-processes, Alteryx, data
                mining, SQL/database handling
              </li>
              <li>
                <strong>Soft Skills:</strong> Analytical thinking, collaboration,
                problem-solving, curiosity, precision
              </li>
            </ul>
          </div>

          {/* Currently Learning */}
          <div className="about-learning">
            <h2>Currently Learning</h2>
            <ul>
              <li>C# and .NET backend development</li>
              <li>Azure DevOps & CI/CD workflows</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
