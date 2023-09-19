import React from 'react';
import Navbar from '../Components/navbar/NavBar';
import Footer from '../Components/footer/Footer';
import './pagescss/carrier.css'

const Carrier = () => {
  return (
    <section>
      <Navbar />

    <div className="carrier-container">
    <div className="topic">
      <h1>CAREERS</h1>
      <p>We are always on the lookout for talented individuals to join our team. Explore the exciting career opportunities we have to offer and be a part of our innovative projects.</p>
      <a href="/vacancy" className="see-hiring-button">See Who We Are Hiring</a>
     </div>
   
     <div className="timeline-content-a">
  <div className="timeline-image-a">
    <img src="https://plus.unsplash.com/premium_photo-1661301075272-c172fecd2a3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Image 1" />
  </div>
  <div className="text-container-a">
    <h1>Company Overview</h1>
    <p>
We are a fast-growing tech company that is changing the world. We are passionate about our mission to make the world a better place, and we are looking for talented individuals who share our vision.
</p>
  </div>
</div>

    
        

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>Company Culture</h3>
            <p>We are a collaborative and supportive team, and we are always looking for ways to improve. We believe in giving our employees the freedom to be creative and innovative, and we encourage them to take risks.</p>
          </div>
          <div className="timeline-image">
            <img src="https://images.unsplash.com/photo-1612831197310-ff5cf7a211b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" alt="Image 2" />
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <h3>See Which Teams Are Hiring</h3>
            <p>Our diverse teams are constantly expanding, and we have openings in various departments such as engineering, marketing, design, and more. Join us to make a difference!</p>
          </div>
          <div className="timeline-image">
            <img src="https://images.unsplash.com/photo-1543269865-0a740d43b90c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Image 2" />
          </div>
        </div>
          
          
          <div className="timeline-content">
          <h4>Our Values</h4>
          <p> Connecting the world through Technology</p>
              <div className="big-card">
                <div className="value-card">
                  <h3>Excellence</h3>
                  <p>Excellence is at our core - we are driven to achieve customer, team, and product excellence.</p>
                </div>
                <div className="value-card">
                  <h3>Passion</h3>
                  <p>We love what we do. Our passion is what drives us.</p>
                </div>
                <div className="value-card">
                  <h3>Collaboration</h3>
                  <p>Collaboration is how we get things done. Everyone is on the same team sharing & exchanging ideas.</p>
                </div>
                <div className="value-card">
                  <h3>Transparency</h3>
                  <p>We solve challenges and celebrate wins together. We do this by supporting & recognizing our team.</p>
                </div>
                <div className="value-card">
                  <h3>Empathy</h3>
                  <p>We respect & support each other. Being a decent human being is just as important as generating results.</p>
                </div>
                <div className="value-card">
                  <h3>Unity</h3>
                  <p>We bring our whole selves to work. Together, we create an environment that allows us to go above & beyond.</p>
                </div>
              </div>
            </div>
        
          {/* End of big card */}
      

      

        

  <div className="join-cfo-central-section">
  <div className="card-carrier">
  <h3>Join Intersect Info Developers</h3>
  <div className="card-content-carrier">
 
  <div className="card-content-carrier">
  
  <div className="card-image">
  <img src="https://images.unsplash.com/photo-1542744095-291d1f67b221?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="CFO Central" />
  </div>
  <div className="text-content">
  <p>We are not just an IT company – we are a team of dynamic professionals, each with a unique skill set and a shared vision. Our services span a wide spectrum, from crafting captivating websites to developing cutting-edge mobile applications. Our expertise extends to software development, where we harness the power of languages like JavaScript, Python, Java, and  Swift to build seamless, robust solutions.</p>
  </div>
  </div>


      <div className="wave-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</div>
</div>
<Footer />
</section>
  );
};

export default Carrier;
