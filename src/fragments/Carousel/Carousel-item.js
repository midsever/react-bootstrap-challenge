import React from "react";
import "./Carousel-item.scss";

class CarouselItem extends React.Component {
    render() {
        return (
            <div className={`carousel-item ${this.props.slide.class}`}>
                {this.props.slide.img && (
                    <img
                        className={this.props.slide.img.class}
                        src={this.props.slide.img.src}
                        alt={this.props.slide.img.alt}
                    />
                )}
                <div className="container">
                    <div className="carousel-caption text-left">
                        <h1>{this.props.slide.title}</h1>
                        <p>{this.props.slide.body}</p>
                        <p>
                            {this.props.slide.btn && (
                                <a
                                    className="btn btn-lg btn-primary"
                                    href={this.props.slide.btn.href}
                                    role="button"
                                >
                                    {this.props.slide.btn.text}
                                </a>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselItem;
