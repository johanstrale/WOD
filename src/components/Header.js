import React from 'react';

const HeaderComp = ({title}) => {
    return (
        <header className='page-header'>
            <h2>{title}</h2>
        </header>
    );
}

export default HeaderComp;