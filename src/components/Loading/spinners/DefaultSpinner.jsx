import React from 'react';
import PropTypes from 'prop-types';

/**
 * Spinner created by Tobias Ahlin, https://github.com/tobiasahlin/SpinKit
 */
const DefaultSpinner = ({status, color, fullscreen, debug}) => {
    let debugTitle;
    if (debug) {
        debugTitle = (
            <h3 className="dash-loading-title">
                Loading {status.component_name}
                's {status.prop_name}
            </h3>
        );
    }
    return (
        <div className={fullscreen ? 'dash-spinner-container' : ''}>
            {debugTitle}
            <div className="dash-default-spinner">
                <div className="dash-default-spinner-rect1" />
                <div className="dash-default-spinner-rect2" />
                <div className="dash-default-spinner-rect3" />
                <div className="dash-default-spinner-rect4" />
                <div className="dash-default-spinner-rect5" />
            </div>
            <style>
                {`
                    .dash-spinner-container {
                        position: fixed;
                        width: 100vw;
                        height: 100vh;
                        top: 0;
                        left: 0;
                        background-color: white;
                        z-index: 99;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .dash-loading-title {
                        text-align: center;
                    }
                    .dash-default-spinner{
                        margin: 1rem auto;
                        width: 50px;
                        height: 40px;
                        text-align: center;
                        font-size: 10px;
                    }
                    
                    .dash-default-spinner > div {
                        background-color: ${color};
                        height: 100%;
                        width: 6px;
                        display: inline-block;
                        margin-right: 4px;
                        
                        -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
                        animation: sk-stretchdelay 1.2s infinite ease-in-out;
                    }
                    
                    .dash-default-spinner-rect2 {
                        -webkit-animation-delay: -1.1s;
                        animation-delay: -1.1s;
                    }
                    
                    .dash-default-spinner-rect3 {
                        -webkit-animation-delay: -1.0s;
                        animation-delay: -1.0s;
                    }
                    
                    .dash-default-spinner-rect4 {
                        -webkit-animation-delay: -0.9s;
                        animation-delay: -0.9s;
                    }
                    
                    .dash-default-spinner-rect5 {
                        -webkit-animation-delay: -0.8s;
                        animation-delay: -0.8s;
                    }
                    
                    @-webkit-keyframes sk-stretchdelay {
                        0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
                        20% { -webkit-transform: scaleY(1.0) }
                    }
                    
                    @keyframes sk-stretchdelay {
                        0%, 40%, 100% { 
                        transform: scaleY(0.4);
                        -webkit-transform: scaleY(0.4);
                        }  20% { 
                        transform: scaleY(1.0);
                        -webkit-transform: scaleY(1.0);
                        }
                    }
            `}
            </style>
        </div>
    );
};

DefaultSpinner.propTypes = {
    status: PropTypes.object,
    color: PropTypes.string,
    fullscreen: PropTypes.bool,
    debug: PropTypes.bool,
};

export default DefaultSpinner;