import React, { Component } from 'react';
import './body.css'; 

class SliderClip {
  constructor(el) {
    this.el = el;
    this.Slides = Array.from(this.el.querySelectorAll('li'));
    this.Nav = Array.from(this.el.querySelectorAll('aside a'));
    this.totalSlides = this.Slides.length;
    this.current = 0;
    this.autoPlay = true;
    this.timeTrans = 4000; 
    this.IndexElements = [];

    for (let i = 0; i < this.totalSlides; i++) {
      this.IndexElements.push(i);
    }

    this.setCurret();
    this.initEvents();
  }

  setCurret() {
    this.Slides[this.current].classList.add('current');
    this.Nav[this.current].classList.add('current_dot');
  }

  initEvents() {
    const self = this;

    this.Nav.forEach(dot => {
      dot.addEventListener('click', ele => {
        ele.preventDefault();
        this.changeSlide(this.Nav.indexOf(dot));
      });
    });

    this.el.addEventListener('mouseenter', () => self.autoPlay = false);
    this.el.addEventListener('mouseleave', () => self.autoPlay = true);

    setInterval(function () {
      if (self.autoPlay) {
        self.current = self.current < self.Slides.length - 1 ? self.current + 1 : 0;
        self.changeSlide(self.current);
      }
    }, this.timeTrans);

  }

  changeSlide(index) {
    this.Nav.forEach(allDot => allDot.classList.remove('current_dot'));

    this.Slides.forEach(allSlides => allSlides.classList.remove('prev', 'current'));

    const getAllPrev = value => value < index;

    const prevElements = this.IndexElements.filter(getAllPrev);

    prevElements.forEach(indexPrevEle => this.Slides[indexPrevEle].classList.add('prev'));

    this.Slides[index].classList.add('current');
    this.Nav[index].classList.add('current_dot');
  }
}

class Body extends Component {
  componentDidMount() {
    const slider = new SliderClip(document.querySelector('.slider'));
  }

  render() {
    return (
      <section className="slider">
        <ul>
          <li>
            <article className="center-y padding_2x">
              <h3 className="big title"><em>Inter</em>sect <em>Info</em>Developers</h3>
              <p>Connecting Through Technology...</p>	
              <a href="/about" className="btn btn_3">More about us</a>
            </article>
          </li>
          <li>
            <article className="center-y padding_2x">
              <h3 className="big title"><em>We are </em> here for you</h3>
              <p>Grow with Us...</p>	
              <a href="/services" className="btn btn_3">Our Services</a>
            </article>
          </li>
          <li>
            <article className="center-y padding_2x">
              <h3 className="big title"><em>We can solve</em> your Problems</h3>
              <p>The Future Is Now....</p>	
              <a href="/carrier" className="btn btn_3">Apply Now</a>
            </article>
          </li>
          <aside>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </aside>
        </ul>
      </section>
    );
  }
}

export default Body;
