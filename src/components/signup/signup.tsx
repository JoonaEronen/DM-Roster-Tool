import React from 'react';
import { Utility } from '../../interfaces/class';
import './signup.css';

function Signup() {

  return (
    <div>
        <header className="Signup-header">
            <h1>
                Signup Page
            </h1>
        </header>

        <div className="signup-container">
            <div className="signup-sheet">
                Sheet
            </div>

            <div className="signup-breakdown">
                <h3>Breakdown </h3>

                {Object.values(Utility).map((x) => {
                    return <div className="utility-container">
                        {x}
                    </div>
                })}
                
            </div>
        </div>
    </div>
  );
}

export default Signup;
