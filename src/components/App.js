import React, {Component} from 'react';
import Wod from './Wod';
import Header from './Header';
import Footer from './Footer';
import data from '../assets/data';
import _ from 'lodash';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            generatedWod: {},
            title: "Dagens träning"
        };
    }
    
    generateWod() {
        let generatedWod = _.sample(data);
        this.setState({generatedWod});
        this.setState({ title: generatedWod.title })
    }

    render() {

        return (
            <div className="page">
                <Header title = { this.state.title } />
                <main className='page-content'>
                    <section>
                        <Wod item = { this.state.generatedWod } />
                    </section>
                </main>
                <Footer onButtonClick = { () => this.generateWod() } />
            </div>
        );
    };
};

export default App;