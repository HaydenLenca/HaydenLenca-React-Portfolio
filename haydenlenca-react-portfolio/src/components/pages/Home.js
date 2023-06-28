import React from 'react';
import p1img from './images/prework.png';
import p2img from './images/CoffeeWalks.png';
import p3img from './images/project3.png';


export default function Home() {
  return (
    <><div>
      <h1>Home Page</h1>
      <p>this is where i will add my projects</p>
    </div>
    <section>
        <p>Projects will be added below!</p>

        <div>
          <p>
            Pre-work Guide
          </p>
          <a href="https://haydenlenca.github.io/prework-study-guide/"><img src={p1img} alt="Pre-Work" /></a>
        </div>



      </section>
      <section>


        <div>
          <p>
            Coffee Walks
          </p>
          <a href="https://griffinwoj.github.io/Backstreet-Boyz/"><img src={p2img} alt="Coffee-Walks" /></a>
        </div>

      </section>
      <section>


        <div>
          <p>
            Death Wish
          </p>
          <a href="https://desolate-caverns-49828.herokuapp.com/login"><img src={p3img} alt="Death Wish" /></a>
        </div>

        <p>More projects coming soon!</p>

      </section>
      </>
  );
}