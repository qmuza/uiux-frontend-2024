import React from "react";
import "./ProgressBar.css"

const ProgressBar = ({prog_percent}) => {
    return (
        <div className="progress-wrapper">
            <div className="main-progress-body">
                <div className="inner-progress-bg">
                    <div className="progress-bar-real" style={{ width: `calc(50px + (100% - 50px) * ${prog_percent} / 100)`}}>
                        <span className="progress-text">{prog_percent}%</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;