import React from "react";
import "./Marketing.scss";

class Marketing extends React.Component {
    render() {
        return (
            <div>
                {this.props.card.img && (
                    <img
                        className={this.props.card.img.class}
                        src={this.props.card.img.src}
                        alt={this.props.card.img.src}
                        width="140"
                        height="140"
                    />
                )}
                <h2>{this.props.card.title}</h2>
                <p>{this.props.card.body}</p>
                {this.props.card.btn && (
                    <p>
                        <a
                            className="btn btn-secondary"
                            href={this.props.card.btn.href}
                            role="button"
                        >
                            {this.props.card.btn.text}
                        </a>
                    </p>
                )}
            </div>
        );
    }
}

export default Marketing;
