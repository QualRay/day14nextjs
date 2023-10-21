import Link from 'next/link';
import React from 'react';

function Aside() {
    return (
        <>

            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " href="/admin/dashboard">
                            <i className="bi bi-grid" />
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-menu-button-wide" /><span>Purchasing</span><i className="bi bi-chevron-down ms-auto" />
                        </Link>
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="/admin/purchase-start">
                                    <i className="bi bi-circle" /><span>Start</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/purchase-in-progress">
                                    <i className="bi bi-circle" /><span>In Progress</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin/purchase-completed">
                                    <i className="bi bi-circle" /><span>Completed</span>
                                </Link>
                            </li>
                        </ul>
                    </li>{/* End Components Nav */}
                    
                     
                </ul>
            </aside>
        </>
    );
}

export default Aside;
