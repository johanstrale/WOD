import React from 'react';
import _ from 'lodash';
import WodSection from './WodSection';

const Wod = ({item}) => {

    if(_.isEmpty(item)) {
        return <h4>Välkommen</h4>
    }

    const wodSections = item.wod.map((section, index) => {
        return(
            <div key={index} className="page-module">
                <h4>{ section.description }</h4>
                <WodSection 
                    steps = {section.steps}/>
            </div>
        );
    });

    return (
        <div>
            {wodSections}
        </div>
    );
};

export default Wod;