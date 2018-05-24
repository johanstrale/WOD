import React from 'react';
import { Button } from 'semantic-ui-react';

const FooterComp = ({onButtonClick}) => {

    return (
        <footer className='page-footer'>
            <Button basic color='grey' onClick={() => onButtonClick()}>Slumpa</Button>
        </footer>
    );
}

export default FooterComp;