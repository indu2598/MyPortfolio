import React, { Component } from 'react';
import Widecard from '../components/Widecard';

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <h2 className="subtopic">My Education</h2>
            <Widecard title="Master's in Computer Application" where="Maharishi Markandeshwar University, Mullana" from="July 2017" to="June 2019"/>
            <Widecard title="B.SC Computer Science" where="Govt. P.G. College, Ambala Cantt(KUK Affilated)" from="June 2013" to="May 2016"/>
            <Widecard title="12th with PCM" where="Jawahar Navodaya Vidyalaya, Mouli" from="2012" to="2013"/>
            <Widecard title="10th" where="Jawahar Navodaya Vidyalaya, Mouli" from="2010" to="2011"/>
            </div>
            )
        }
    }
    
export default Education
    