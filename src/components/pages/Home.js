import React from 'react';
import Project from '../Project';
import p1img from './images/prework.png';
import p2img from './images/CoffeeWalks.png';
import p3img from './images/project3.png';
import p4img from './images/Password-display.png';
import p5img from './images/Screenshot (23).png';
import p6img from './images/Screenshot (31).png';


export default function Home() {
  const projects = [
    {
      title: 'Pre-Work',
      image: p1img,
      github: 'https://github.com/HaydenLenca/prework-study-guide',
      deploy: 'https://haydenlenca.github.io/prework-study-guide/',
      description: 'Im not sure this is how it works'
    },
    {
      title: 'Coffee Walks (group project)',
      image: p2img,
      github: 'https://github.com/griffinwoj/Backstreet-Boyz',
      deploy: 'https://griffinwoj.github.io/Backstreet-Boyz/'
    },
    {
      title: 'Death Wish (group project)',
      image: p3img,
      github: 'https://github.com/x3n0g3n/backstreetIsBack',
      deploy: 'https://desolate-caverns-49828.herokuapp.com/login'
    },
    {
      title: 'Password Generator',
      image: p4img,
      github: 'https://github.com/HaydenLenca/My-Password-Generator',
      deploy: 'https://haydenlenca.github.io/My-Password-Generator/'
    },
    {
      title: 'Calendar Log',
      image: p5img,
      github: 'https://github.com/HaydenLenca/Your-Calander-Log',
      deploy: 'https://haydenlenca.github.io/Your-Calander-Log/'
    },
    {
      title: 'Hitched and Gliched',
      image: p6img,
      github: 'https://github.com/erin-m-keller/hitched-and-glitched',
      deploy: 'https://hitched-and-glitched-697b7a3de50f.herokuapp.com/',
    }
  ];

  return (
    <section className="container my-5">
      <h1 className="text-center">Portfolio</h1>
      <hr />
      <div className="row">
        {projects.map((project, index) => (
         <Project project = {project} key= {"project" + index}/>
        ))}
      </div>
    </section>
  );
}