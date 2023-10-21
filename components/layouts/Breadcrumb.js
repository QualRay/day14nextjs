'use client'
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Breadcrumb() {
    const pathname = usePathname();
    const title = pathname.split('/').pop().toUpperCase();
    //console.log();
  return (
    <div className="pagetitle">
                    <h1>{title}</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item active">{title}</li>
                        </ol>
                    </nav>
                </div>
  );
}
