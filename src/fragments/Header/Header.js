import React from "react";
import "./Header.scss";

class Header extends React.Component {

    state = {
        menu: {
            collapsed: true
        }
    }

    toggle = () => {
        this.setState({
            menu: {
                collapsed: !this.state.menu.collapsed
            }
        })
    }

    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="/#">
                        Carousel
                    </a>

                    <button
                        className={`navbar-toggler ${this.state.menu.collapsed ? 'collapsed' : ''}`}
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={this.toggle}
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className={`collapse navbar-collapse ${this.state.menu.collapsed ? '' : 'show'}`}
                        id="navbarCollapse"
                    >
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/#">
                                    Home{" "}
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#">
                                    Link
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="/#">
                                    Disabled
                                </a>
                            </li>
                        </ul>
                        <form className="form-inline mt-2 mt-md-0">
                            <input
                                className="form-control mr-sm-2"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success my-2 my-sm-0"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;
