import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Aboutme from './Aboutme';
import Contactme from './Contactme';


function Navigation() {
    const [activeComponent, setActiveComponent] = useState('Aboutme');

    const handleNavigationClick = (componentName) => {
        setActiveComponent(componentName);
    };
    let componentToRender;
    switch (activeComponent) {
        case 'Resume':
            componentToRender = <Resume />;
            break;
        case 'Portfolio':
            componentToRender = <Portfolio />;
            break;
        case 'Contactme':
            componentToRender = <Contactme />;
            break;
        default:
            componentToRender = <Aboutme />;
    }
    return (
        <div>
            <Header handleNavigationClick={handleNavigationClick} />
            {componentToRender}
            <Footer />
        </div>
    );
}

export default Navigation;