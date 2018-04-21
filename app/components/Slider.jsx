import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import Parser from "html-react-parser";

class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.changeSlide = this.changeSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.autoPlay = this.autoPlay.bind(this);

    this.state = {
      slides: [
        "<div className='slide1'><a href='/catalogue/1/1' className='btn btn-wider btn-red'>ОТКРЫТЬ КАТАЛОГ</a></div>",
        "<div><img src='/images/slider/2.jpg'/></div>"
      ],
      currentSlide: 0
    };
  }

  nextSlide() {
    this.setState({
      currentSlide:
        this.state.currentSlide < this.state.slides.length - 1
          ? this.state.currentSlide + 1
          : 0
    });
  }

  prevSlide() {
    this.setState({
      currentSlide:
        this.state.currentSlide > 0
          ? this.state.currentSlide - 1
          : this.state.slides.length - 1
    });
  }

  autoPlay() {
    this.setState({ timerId: setInterval(() => this.nextSlide(), 2000) });
  }

  hoverHandler(x) {
    if (x == "in") {
      clearTimeout(this.state.timerId);
      this.setState({ timerId: null });
    } else {
      this.autoPlay();
    }
  }

  changeSlide(e) {
    this.setState({ currentSlide: e.target.dataset.num });
  }

  componentDidMount() {
    this.autoPlay();
  }
  componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

  render() {
    return (
      <div
        className="slider"
        onMouseEnter={() => this.hoverHandler("in")}
        onMouseLeave={() => this.hoverHandler("out")}
      >
        <a
          href="#"
          className="slider-button-prev arrow-left"
          onClick={this.prevSlide}
        />
        {this.state.slides.map((slide, num) => {
          return (
            <div
              key={num}
              className={
                num == this.state.currentSlide ? "slide active" : "slide"
              }
            >
              {Parser(slide)}
            </div>
          );
        })}
        <div className="slider-indicator-list">
          {this.state.slides.map((slide, num) => (
            <a
              href="#"
              data-num={num}
              key={num}
              className={
                num == this.state.currentSlide
                  ? "slide-indicator active"
                  : "slide-indicator"
              }
              onClick={this.changeSlide}
            />
          ))}
        </div>
        <a
          href="#"
          className="slider-button-next arrow-right"
          onClick={this.nextSlide}
        />
      </div>
    );
  }
}

module.exports = Slider;
