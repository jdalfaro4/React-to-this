import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Navigation from './pages/Navigation';
import Aboutme from './pages/Aboutme';
import Resume from './pages/Resume';
import Contactme from './pages/Contactme';
import Portfolio from './pages/Portfolio';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Navigation');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Navigation') {
            return <Navigation />;
        }
        if (currentPage === 'Aboutme') {
            return <Aboutme />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contactme') {
            return <Contactme />;
        };
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            {/* Here we are calling the renderPage method which will return a component  */}
            {renderPage()}
        </div>
    );
}
