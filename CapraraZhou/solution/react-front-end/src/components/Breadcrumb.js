import React from 'react';
import {useLocation, Link} from 'react-router-dom';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    const ignoredPaths = "league game player";

    return (
        <nav aria-label="breadcrumb" className="breadcrumbs mt-3">
            <div className="container">
                <ol className="breadcrumb mx-lg-5 p-1 px-3 box-shadow rounded-1">
                    <li className="breadcrumb-item">
                        <Link to="/">Home</Link>
                    </li>
                    {pathnames.map((name, index) => {
                        if (!ignoredPaths.includes(name)) {
                            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                            const isLast = index === pathnames.length - 1;

                            return (
                                <li key={name} className={`breadcrumb-item ${isLast ? 'active' : ''}`}>
                                    {isLast ? (
                                        name
                                    ) : (
                                        <Link to={routeTo}>{name}</Link>
                                    )}
                                </li>
                            );
                        }
                    })}
                </ol>
            </div>
        </nav>
    );
};

export default Breadcrumb;