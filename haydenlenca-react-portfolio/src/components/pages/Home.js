import React from 'react';
import p1img from './images/prework.png';
import p2img from './images/CoffeeWalks.png';
import p3img from './images/project3.png';
import p4img from './images/Password-display.png'
import p5img from './images/Screenshot (23).png'


export default function Home() {
  return (
    <><div>
      <h1>Portfolio Page</h1>
      
    </div>

    <p>Projects will be added below!</p>
    <p>To view the Git Hub Repository click on the name of the project</p>
    <p>To view the deployed site click on the image of the project</p>

    <section>
        

        <div>
          <p>
           <a href='https://github.com/HaydenLenca/prework-study-guide'> Pre-work Guide </a>
          </p>
          <a href="https://haydenlenca.github.io/prework-study-guide/"><img src={p1img} alt="Pre-Work" /></a>
        </div>

      </section>

      <section>

        <div>
          <p>
           <a href='https://github.com/griffinwoj/Backstreet-Boyz'> Coffee Walks </a>
          </p>
          <p>A group project</p>
          <a href="https://griffinwoj.github.io/Backstreet-Boyz/"><img src={p2img} alt="Coffee-Walks" /></a>
        </div>

      </section>

      <section>

        <div>
          <p>
           <a href='https://github.com/x3n0g3n/backstreetIsBack'> Death Wish </a>
          </p>
          <p>A group project</p>
          <a href="https://desolate-caverns-49828.herokuapp.com/login"><img src={p3img} alt="Death Wish" /></a>
        </div>

      <section>

        <div>
          <p>
          <a href='https://github.com/HaydenLenca/My-Password-Generator'> Password Generator </a>
          </p>
          <a href="https://haydenlenca.github.io/My-Password-Generator/"><img src={p4img} alt="Password Generator" /></a>
        </div>

      </section>

      <section>

        <div>
          <p>
           <a href='https://github.com/HaydenLenca/Your-Calander-Log'> Calendar Log </a>
          </p>
          <a href="https://haydenlenca.github.io/Your-Calander-Log/"><img src={p5img} alt="Calendar Log" /></a>
        </div>

      </section>

        <p>More projects coming soon!</p>

      </section>
      </>
  );
}