import React from "react";
import { Link } from "react-router-dom";

import Card from "../components/utils/Card";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>About This App</h1>
        <p>We're always striving to improve our service at Twinwaters and provide our customers with the best possible experience. We would greatly appreciate your feedback on your dining experience today. Please let us know if there's anything we can do to make your next visit even better.</p>
        <p>Version: 1.0.0</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
