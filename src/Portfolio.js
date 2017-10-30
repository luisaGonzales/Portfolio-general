import React, { Component } from 'react';
import { connect } from 'redux-zero/react';
import { selectSectionAction } from './actions';
import './Portfolio.css';
import personImage from './assets/person1.jpg';

const Header = ({ onCollapseClick, student }) => (
   <header id="main-header">
      <div className="row no-gutters">
         <div className="col-lg-4 col-md-5">
            <img src={personImage} />
         </div>
         <div className="col-lg-8 col-md-7">
            <div className="d-flex flex-column">
               <div className="p-5 bg-dark text-white">
                  <div className="name d-flex flex-row justify-content-between align-items-center">
                     <h1 className="display-4">{student}</h1>
                     <div>
                        <i className="fa fa-twitter" />
                     </div>
                     <div>
                        <i className="fa fa-facebook" />
                     </div>
                     <div>
                        <i className="fa fa-instagram" />
                     </div>
                     <div>
                        <i className="fa fa-github" />
                     </div>
                  </div>
               </div>
               <div className="p-4 bg-black">
                  Experienced Full Stack Web Developer // ?
               </div>
               <div>
                  <div className="d-flex flex-row text-white align-items-stretch text-center">
                     <div
                        className="port-item p-4 bg-primary"
                        data-toggle="collapse"
                        data-target="#home"
                        onClick={() => onCollapseClick('home')}
                     >
                        <i
                           className="fa fa-home d-block"
                           onClick={() => onCollapseClick('home')}
                        />{' '}
                        Home
                     </div>
                     <div
                        className="port-item p-4 bg-success"
                        data-toggle="collapse"
                        data-target="#resume"
                        onClick={() => onCollapseClick('resume')}
                     >
                        <i
                           data-target="#home"
                           className="fa fa-graduation-cap d-block"
                           onClick={() => onCollapseClick('resume')}
                        />{' '}
                        Resume
                     </div>
                     <div
                        className="port-item p-4 bg-warning"
                        data-toggle="collapse"
                        data-target="#work"
                        onClick={() => onCollapseClick('work')}
                     >
                        <i
                           data-target="#work"
                           className="fa fa-folder-open d-block"
                           onClick={() => onCollapseClick('work')}
                        />{' '}
                        Work
                     </div>
                     <div
                        className="port-item p-4 bg-danger"
                        data-toggle="collapse"
                        data-target="#contact"
                        onClick={() => onCollapseClick('contact')}
                     >
                        <i
                           data-target="#contact"
                           className="fa fa-envelope d-block"
                           onClick={() => onCollapseClick('contact')}
                        />{' '}
                        Contact
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
);

const Home = ({ selectedSection, bio }) => (
   <div
      id="home"
      className={'collapse ' + (selectedSection == 'home' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-primary text-white py-5">
         <h2>Welcome to my page</h2>
         <p className="lead">
            {bio}
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>My Skills</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            nulla et, modi harum hic deserunt.
         </p>
         <hr />
         <h4>HTML</h4>
         <div className="progress mb-3">
            <div
               className="progress-bar bg-success"
               style={{ width: '100%' }}
            />
         </div>
         <h4>CSS</h4>
         <div className="progress mb-3">
            <div
               className="progress-bar bg-success"
               style={{ width: '100%' }}
            />
         </div>
         <h4>JavaScript</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '90%' }} />
         </div>
         <h4>React</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '80%' }} />
         </div>
         <h4>Redux</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '70%' }} />
         </div>
         <h4>jQuery</h4>
         <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{ width: '100%' }} />
         </div>
      </div>
   </div>
);

const Resume = ({ selectedSection }) => (
   <div
      id="resume"
      className={'collapse ' + (selectedSection == 'resume' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-success text-white py-5">
         <h2>My Resume</h2>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo nobis
            ut labore iure tempore qui!
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>Where have I worked?</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
            eligendi, ex officia itaque tempora natus.
         </p>
         <div className="card-deck">
            <div className="card">
               <div className="card-body">
                  <h4 className="card-title">Devmasters</h4>
                  <p className="card-text">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quod, nostrum.
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Position: Full Stack Developer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Phone: (444) 444-4444
                  </p>
               </div>
               <div className="card-footer">
                  <h6 className="text-muted">Dates: 2015 - 2017</h6>
               </div>
            </div>
            <div className="card">
               <div className="card-body">
                  <h4 className="card-title">Websites Pro</h4>
                  <p className="card-text">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quod, nostrum.
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Position: Front End Developer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Phone: (333) 333-3333
                  </p>
               </div>
               <div className="card-footer">
                  <h6 className="text-muted">Dates: 2013 - 2015</h6>
               </div>
            </div>
            <div className="card">
               <div className="card-body">
                  <h4 className="card-title">123 Designs</h4>
                  <p className="card-text">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Quod, nostrum.
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Position: Designer
                  </p>
                  <p className="p-2 mb-3 bg-dark text-white">
                     Phone: (222) 222-2222
                  </p>
               </div>
               <div className="card-footer">
                  <h6 className="text-muted">Dates: 2010 - 2013</h6>
               </div>
            </div>
         </div>
      </div>
   </div>
);

const Work = ({ selectedSection }) => (
   <div
      id="work"
      className={'collapse ' + (selectedSection == 'work' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-warning py-5">
         <h3>My Portfolio</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
            adipisci?
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>What have I built?</h3>
         <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta,
            eum.
         </p>
         <div className="row no-gutters">
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=251"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=251"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=252"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=252"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=253"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=253"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=254"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=254"
                     className="img-fluid"
                  />
               </a>
            </div>
         </div>
         <div className="row no-gutters">
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=255"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=255"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=256"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=256"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=257"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=257"
                     className="img-fluid"
                  />
               </a>
            </div>
            <div className="col-md-3">
               <a
                  href="https://unsplash.it/1200/768.jpg?image=258"
                  data-toggle="lightbox"
               >
                  <img
                     src="https://unsplash.it/600.jpg?image=258"
                     className="img-fluid"
                  />
               </a>
            </div>
         </div>
      </div>
   </div>
);

const Contact = ({ selectedSection }) => (
   <div
      id="contact"
      className={'collapse ' + (selectedSection == 'contact' ? 'show' : 'hide')}
   >
      <div className="card card-body bg-danger text-white py-5">
         <h2>Contact</h2>
         <p>
            Me encuentro en todas las redes sociales para que puedas contactarme; 
         </p>
      </div>
      <div className="card card-body py-5">
         <h3>Get in touch</h3>
         <p>
            Si te ha encantado mi trabajo; por favor, envíame un mensaje.
         </p>
         <form>
            <div className="form-group">
               <div className="input-group input-group-lg">
                  <span className="input-group-addon bg-danger text-white">
                     <i className="fa fa-user" />
                  </span>
                  <input
                     type="text"
                     className="form-control bg-dark text-white"
                     placeholder="Name"
                  />
               </div>
            </div>
            <div className="form-group">
               <div className="input-group input-group-lg">
                  <span className="input-group-addon bg-danger text-white">
                     <i className="fa fa-envelope" />
                  </span>
                  <input
                     type="email"
                     className="form-control bg-dark text-white"
                     placeholder="Email"
                  />
               </div>
            </div>
            <div className="form-group">
               <div className="input-group input-group-lg">
                  <span className="input-group-addon bg-danger text-white">
                     <i className="fa fa-pencil" />
                  </span>
                  <textarea
                     rows={5}
                     className="form-control bg-dark text-white"
                     placeholder="Message"
                     defaultValue={''}
                  />
               </div>
            </div>
            <input
               type="submit"
               defaultValue="Submit"
               className="btn btn-danger btn-block btn-lg"
            />
         </form>
      </div>
   </div>
);

const Footer = () => (
   <footer id="main-footer" className="p-5 bg-dark text-white">
      <div className="row">
         <div className="col-md-6">
            <a href="#" className="btn btn-outline-light">
               <i className="fa fa-cloud" /> Download Resume
            </a>
         </div>
      </div>
   </footer>
);

const Portfolio = ({ selectedSection, student }) => (
   <div className="container">
      <Header onCollapseClick={e => selectSectionAction(e)} student={student.name} />
      <Home selectedSection={selectedSection} bio={student.bio} />
      <Resume selectedSection={selectedSection} />
      <Work selectedSection={selectedSection} />
      <Contact selectedSection={selectedSection} />
      <Footer />
   </div>
);

const mapToProps = ({ selectedSection, student }) => ({
   selectedSection,
   student
});
export default connect(mapToProps)(Portfolio);
