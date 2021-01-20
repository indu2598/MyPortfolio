import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../img/Indu_Photo.jpg';
import Social from '../components/Social'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <ReactTypingEffect className="typingeffect" text={['I am Indu Chouhan (Python Developer)']} speed={120} eraseDelay={750}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    