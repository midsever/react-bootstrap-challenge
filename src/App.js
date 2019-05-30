import React from "react";
import "./App.scss";

import Header from "./fragments/Header/Header";
import Carousel from "./fragments/Carousel/Carousel";

import Marketing from "./fragments/Marketing/Marketing";
import { cards } from './fragments/Marketing/data/index';

import Featurette from "./fragments/Featurette/Featurette";
import { featurettes } from './fragments/Featurette/data/index';

function App() {
    return (
        <div className="App">
            <Header />

            <main role="main">
                <Carousel />

                <div className="container marketing">
                    <div className="row">
                        <div className="col-lg-4">
                            <Marketing card={cards[0]} />
                        </div>
                        <div className="col-lg-4">
                            <Marketing card={cards[1]} />
                        </div>
                        <div className="col-lg-4">
                            <Marketing card={cards[2]} />
                        </div>
                    </div>

                    <hr className="featurette-divider" />

                    <Featurette featurette={featurettes[0]} />

                    <hr className="featurette-divider" />

                    <Featurette featurette={featurettes[1]} />

                    <hr className="featurette-divider" />

                    <Featurette featurette={featurettes[2]} />

                    <hr className="featurette-divider" />
                </div>

                <footer className="container">
                    <p className="float-right">
                        <a href="/#">Back to top</a>
                    </p>
                    <p>
                        © 2017-2018 Company, Inc. · <a href="/#">Privacy</a> ·
                        <a href="/#">Terms</a>
                    </p>
                </footer>
            </main>
        </div>
    );
}

export default App;
