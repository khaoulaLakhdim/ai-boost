import React from 'react';
import './DemoSection.css';

const DemoSection = () => {
  return (
    <section className="demo-section">
      <h2 className="demo-title">DEMO</h2>
      <div className="demo-video-wrapper">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default DemoSection; 