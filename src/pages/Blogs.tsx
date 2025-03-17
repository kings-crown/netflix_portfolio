import React from 'react';
import './Blogs.css';
import { FaBookOpen, FaUniversity } from 'react-icons/fa';
import { AiOutlineFilePdf } from 'react-icons/ai';

const publications = [
  {
    title: "Anatomy of an AI Economy",
    platform: "IEEE ISSE 2024",
    icon: <FaUniversity />,
    link: "https://ieeexplore.ieee.org/document/10741091", // Replace with actual link
    description: "Explores AI's role in shaping modern economic structures and implications.",
  },
  {
    title: "Identification of Variables Impacting Cascading Failures in Aerospace Systems",
    platform: "CSER 2024",
    icon: <FaUniversity />,
    link: "https://link.springer.com/chapter/10.1007/978-3-031-62554-1_26", // Replace with actual link
    description: "Analyzes key variables influencing cascading failures using systems thinking.",
  },
  {
    title: "A Game Theoretic Approach for Validator Selection in Proof of Stake Blockchains",
    platform: "ICoABCD 2023",
    icon: <FaBookOpen />,
    link: "https://ieeexplore.ieee.org/document/10390962", // Replace with actual link
    description: "Proposes a game-theoretic model to optimize validator selection in PoS systems.",
  },
  {
    title: "Neural Theorem Proving: Generating and Structuring Proofs for Formal Verification",
    platform: "NeSy 2025 (Under Review)",
    icon: <AiOutlineFilePdf />,
    link: "https://openreview.net/attachment?id=QeoJtLyRsn&name=pdf", // Replace with actual link or placeholder
    description: "Introduces a framework for LLM-based formal verification and neural theorem proving.",
  },
];

const Blogs: React.FC = () => {
  return (
    <div className="blogs-container">
      <h2 className="blogs-title">📚 My Research Publications</h2>
      <p className="blogs-intro">A curated collection of my contributions to AI, formal verification, and systems engineering.</p>
      <div className="blogs-grid">
        {publications.map((pub, index) => (
          <a href={pub.link} key={index} target="_blank" rel="noopener noreferrer" className="blog-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="blog-icon animated-icon">{pub.icon}</div>
            <div className="blog-info animated-text">
              <h3 className="blog-title">{pub.title}</h3>
              <p className="blog-description">{pub.description}</p>
              <span className="blog-platform">{pub.platform}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
