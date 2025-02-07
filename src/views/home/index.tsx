import React from "react";
import welcome from '@a/images/welcome01.png'
import './index.less'

const Home: React.FC = () => {
  return <div className="home card">
    <img src={welcome} alt="welcome" />
  </div>;
};

export default Home;
