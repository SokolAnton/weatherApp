import "./Description.css";

import { FaArrowDown } from 'react-icons/fa';

const Description = () => {
  return (
    <div className="section section__description">
      <div className="card">
        <div className="description__card-icon">
          <FaArrowDown />
          <small>min</small>    
        </div>
        <h2>32 &deg;</h2>
      </div>
    </div>
  );
};

export default Description;
