import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import About from './components/About';
import reportWebVitals from './reportWebVitals';
import Work from './components/Work';
import Project from './components/Project';
import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <About />
    <h2 className='headerIndent'>⚙️ Work Experience</h2>
    <div className='columnContainer'>
      <Work 
        companyName="Amazon" 
        position="Software Development Engineer Intern" 
        stack="TBD" 
        dates="May 2022 - Aug 2022"
        companyLink="https://www.aboutamazon.com/workplace"/>
      <Work 
        companyName="Formative Innovations" 
        position="Software Engineer Intern" 
        stack="C#, .NET, ML.NET, JavaScript, PHP, Golang, MongoDB" 
        dates="May 2021 - Aug 2021"
        companyLink="https://www.formativeinnovations.com/"/>
      <Work 
        companyName="THE BOX" 
        position="Software Developer Intern" 
        stack="C#, Unity, Apple AR Kit 4, XCode, Google ARCore" 
        dates="May 2020 - Aug 2020"
        companyLink="https://www.linkedin.com/company/theboxar/"/>
    </div>
    <h2 className='headerIndent'>💻 Projects</h2>
    <div className='columnContainer'>
      <Project 
        projectName="Speltacular Baking"
        stack="HTML, CSS, JavaScript, PHP"
        date="Spring 2021"
        description="A baking website containing wheat-free recipes! Course project for CISC 282 - Intro to Web Development, which was developed throughout the term. Contains both a mobile and desktop/tablet view."
        githubLink="https://github.com/EvanKilburn/BakeryWebsite"/>
      <Project 
        projectName="Budgy"
        stack="express.js, Firebase, Google Vision, MongoDB, React Native"
        date="Jan 2021"
        description="This project was built for Hack The North 2021. Budgy is a mobile app designed to help students with managing their finances buy allowing users to take photos of reciepts which are then immeaditly applied to their custom budget."
        githubLink="https://github.com/EvanKilburn/budgy"
        devpostLink="https://devpost.com/software/budgy"/>
      <Project 
        projectName="Veil"
        stack="Python, Flask, TensorFlow, JavaScript, React, Bash"
        date="November 2020"
        description="Veil was built for Queen's Women in Computing HackHer 24 hour hackathon. Veil uses a webcam to detect faces of people walking by and uses our machine learning model to detect people not wearing face masks with 98% accuracy."
        githubLink="https://github.com/EvanKilburn/HackHer_FaceMask"/>
      <Project 
        projectName="Checkmate Finder"
        stack="Python, Negation Nortmal Form (NNF Library)"
        date="Fall 2020"
        description="This project was built for CISC 204 - Logic for Computer Science. This application finds a checkmate solution to a given chess board using propositional logic. It was chosen as one of the top 10 best projects out of 85 teams, judged by our professor and TA's."
        githubLink="https://github.com/EvanKilburn/checkmate-finder"/>
      <Project 
        projectName="Stock Overflow"
        stack="HTML, CSS, Python, Pygame, Numpy"
        date="November 2020"
        description="This project was built for Hack Western 7, a 36 hour hackathon, with the goal of improving financial literacy among Canadian youth. Stock Overflow has two main components: the website which is meant to be a teaching resource for financial literacy, and the game with is aimed to teach basic financial analsis and research."
        githubLink="https://github.com/EvanKilburn/StockOverflow"
        devpostLink="https://devpost.com/software/stock-overflow-dpzb9x"/>
      <Project 
        projectName="Smart Windows"
        stack="React, Python, OpenWeather"
        date="March 2020"
        description="Smart Windows is a web app that connects to a Raspberry Pi to detect environmental information about windows and control them. Made at the Queen's Secure Internet of Things Hackathon and winner of the Solace Best Overall Implementation of the DevKit."
        githubLink="https://github.com/EvanKilburn/smart-windows"/>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
