import React from "react";
import "./Featurette.scss";

class Featurette extends React.Component {
    render() {
        return (
            <div className="row featurette">
                <div className={`col-md-7 ${this.props.featurette.direction === 'ltr' ? 'order-md-2' : ''}`} >
                    <h2 className="featurette-heading">
                        {this.props.featurette.title}{" "}
                        <span className="text-muted">
                            {this.props.featurette.muted}
                        </span>
                    </h2>
                    <p className="lead">{this.props.featurette.body}</p>
                </div>
                <div className={`col-md-5 ${this.props.featurette.direction === 'ltr' ? 'order-md-1' : ''}`}>
                    <img
                        className={`featurette-image img-fluid mx-auto ${this.props.featurette.img.class}`}
                        alt={this.props.featurette.img.alt}
                        style={{ width: "500px", height: "500px" }}
                        src={this.props.featurette.img.src}
                    />
                </div>
            </div>
        );
    }
}

export default Featurette;
