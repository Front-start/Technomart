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
      slides: ["<div>123</div>", "<div>312</div>", "3", "4", "5"],
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

  render() {
    return (
      <div
        className="slider"
        onMouseEnter={() => this.hoverHandler("in")}
        onMouseLeave={() => this.hoverHandler("out")}
      >
        <div className="slider-button-prev" onClick={this.prevSlide} />
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
            <div
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
        <div className="slider-button-next" onClick={this.nextSlide} />
      </div>
    );
  }
}

module.exports = Slider;
