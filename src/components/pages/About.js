import React from 'react';
import imgOfMe from './images/imageofme.jpg';

export default function About() {
  return (
    <div className='alignment background'>
      <p className='aboutP'>Hello everyone, in this section I will tell you a little about me. I grew up in Michigan and moved to Arizona to pursue a better life path.
      After spending a few years saving money I decided to get into web development. After trying on my own it became very frustrating.
      On the verge of giving up I decided to take a bootcamp from MSU to get me on the path to greatness. Now here I am building web pages and pursuing the path that will be a great achievement.
      </p>
      <img className='image' src={imgOfMe} alt="Hayden"/>
    </div>
  );
}
