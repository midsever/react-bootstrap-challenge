import React from "react";
import "./Carousel.scss";

import CarouselItem from "./Carousel-item";
import slides from './data/slides';

class Carousel extends React.Component {
    slides = slides;

    state = {
        previous: this.slides.length - 1,
        index: 0,
        next: 1,
        direction: "left",
        flow: "next",
        slides: this.slides
    };

    slide(index) {
        switch (true) {
            case this.state.previous === index:
                this.previous(this.state, this.slides);
                break;
            case this.state.next === index:
                this.next(this.state, this.slides);
                break;
            default:
        }
    }

    previous(state, slides) {
        this.setState(
            {
                previous:
                    state.previous === 0
                        ? slides.length - 1
                        : state.previous - 1,
                index: state.index === 0 ? slides.length - 1 : state.index - 1,
                next: state.next === 0 ? slides.length - 1 : state.next - 1,
                direction: "right",
                flow: "prev"
            },
            () => this.transition(state.previous, state.index)
        );
    }

    next(state, slides) {
        this.setState(
            {
                previous:
                    state.previous === slides.length - 1
                        ? 0
                        : state.previous + 1,
                index: state.index === slides.length - 1 ? 0 : state.index + 1,
                next: state.next === slides.length - 1 ? 0 : state.next + 1,
                direction: "left",
                flow: "next"
            },
            () => this.transition(state.next, state.index)
        );
    }

    transition(to, from) {
        this.slides[to].class = `carousel-item-${this.state.flow}`;
        this.setState({ slides: this.slides });

        setTimeout(() => {
            this.slides[to].class = `carousel-item-${
                this.state.flow
            } carousel-item-${this.state.direction}`;
            this.slides[from].class = `active carousel-item-${
                this.state.direction
            }`;
            this.setState({ slides: this.slides });
        }, 600);

        setTimeout(() => {
            this.slides[to].class = `active`;
            this.slides[from].class = "";
            this.setState({ slides: this.slides });
        }, 1200);
    }

    run(next) {
        setTimeout(() => {
            this.slide(next);
            this.run(this.state.next);
        }, 5000);
    }

    componentDidMount() {
        this.run(this.state.next);
    }

    render() {
        return (
            <div
                id="myCarousel"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        className={this.state.index === 0 ? "active" : ""}
                        onClick={e => this.slide(0)}
                    />
                    <li
                        className={this.state.index === 1 ? "active" : ""}
                        onClick={e => this.slide(1)}
                    />
                    <li
                        className={this.state.index === 2 ? "active" : ""}
                        onClick={e => this.slide(2)}
                    />
                </ol>
                <div className="carousel-inner">
                    <CarouselItem slide={this.state.slides[0]} />
                    <CarouselItem slide={this.state.slides[1]} />
                    <CarouselItem slide={this.state.slides[2]} />
                </div>
                <a
                    className="carousel-control-prev"
                    href="/#"
                    onClick={e => this.slide(this.state.previous)}
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="/#"
                    onClick={e => this.slide(this.state.next)}
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default Carousel;
