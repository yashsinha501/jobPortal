import React, { useState } from 'react';
import html2canvas from 'html2canvas';
import './Resume.css'

function ResumePage() {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [education, setEducation] = useState('');
  const [experience, setExperience] = useState('');
  const [skills, setSkills] = useState('');
  const [projects, setProjects] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Generate JPG
    html2canvas(document.querySelector("#resume")).then(canvas => {
      const link = document.createElement('a');
      link.download = 'resume.jpg';
      link.href = canvas.toDataURL('image/jpeg');
      link.click();
    });
  };

  return (
    <div id="resume">
      <form onSubmit={handleSubmit} className="resume">
      <h1>Resume</h1>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Education:
          <textarea value={education} onChange={(e) => setEducation(e.target.value)} />
        </label>
        <label>
          Experience:
          <textarea value={experience} onChange={(e) => setExperience(e.target.value)} />
        </label>
        <label>
          Skills:
          <textarea value={skills} onChange={(e) => setSkills(e.target.value)} />
        </label>
        <label>
          Projects:
          <textarea value={projects} onChange={(e) => setProjects(e.target.value)} />
        </label>
        <button type="submit">Download JPG</button>
      </form>
    </div>
  );
}

export default ResumePage;
