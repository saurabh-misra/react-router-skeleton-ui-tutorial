import { Link, Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/skeleton" className="nav-link">Skeleton</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/default" className="nav-link">Default(Content takes 2s to appear)</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        
            <Outlet />
        </>
    );
}