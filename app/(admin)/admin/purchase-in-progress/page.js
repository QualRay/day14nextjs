'use client'

import React from 'react'
import DataTable from 'react-data-table-component';


const customSort = (rows, selector, direction) => {
    return orderBy(rows, selector, direction);
};


const columns = [
    {
        name: 'Title',
        selector: row => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: row => row.year,
    },
    {
        name: 'Director',
        selector: row => row.director,
    },
    {
        name: 'Writer',
        selector: row => row.writers,
    },
    {
        name: 'Rating',
        selector: row => row.rating,
        cell: (row) => (
            <button
                className="btn btn-danger btn-xs"
                onClick={(e) => {

                    alert('Flop')
                    }
                }
            >Flop</button>
        ),
    },

];

const data = [
    {
        id: 1,
        title: 'Beetlejuice',
        year: '1988',
        director: 'Tim Burton',
        writers: 'Michael Dowell, Larry Wilson, Warren Skaaren',
        rating: 'Flop'
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
        director: 'Ivan Reitman',
        writers: 'Dan Aykroyd, Harold Ramis, Rick Moranis',
        rating: 'Hit'
    },
    {
        id: 3,
        title: 'Baywatch',
        year: '1995',
        director: 'Michael Berk',
        writers: 'Gregory Bonann, Douglas Schwartz',
        rating: 'Flop'
    },
    {
        id: 4,
        title: 'Grinch',
        year: '1999',
        director: 'Yarrow Chenney, Scott Mossier',
        writers: 'Michael Mossier, Tommy Han, Scott  Han',
        rating: 'Super Hit'
    },
    {
        id: 5,
        title: 'Grinch',
        year: '1999',
        director: 'Yarrow Chenney, Scott Mossier',
        writers: 'Michael Mossier, Tommy Han, Scott  Han',
        rating: 'Super Hit'
    },
    {
        id: 6,
        title: 'Grinch',
        year: '1999',
        director: 'Yarrow Chenney, Scott Mossier',
        writers: 'Michael Mossier, Tommy Han, Scott  Han',
        rating: 'Super Hit'
    },
    {
        id: 7,
        title: 'Grinch',
        year: '1999',
        director: 'Yarrow Chenney, Scott Mossier',
        writers: 'Michael Mossier, Tommy Han, Scott  Han',
        rating: 'Super Hit'
    },
    {
        id: 8,
        title: 'Grinch',
        year: '1999',
        director: 'Yarrow Chenney, Scott Mossier',
        writers: 'Michael Mossier, Tommy Han, Scott  Han',
        rating: 'Super Hit'
    },
    {
        id: 9,
        title: 'Grinch',
        year: '1999',
        director: 'Yarrow Chenney, Scott Mossier',
        writers: 'Michael Mossier, Tommy Han, Scott  Han',
        rating: 'Super Hit'
    },
    {
        id: 10,
        title: 'Grinch',
        year: '1999',
        director: 'Yarrow Chenney, Scott Mossier',
        writers: 'Michael Mossier, Tommy Han, Scott  Han',
        rating: 'Super Hit'
    },
    {
        id: 11,
        title: 'Grinch',
        year: '1999',
        director: 'Yarrow Chenney, Scott Mossier',
        writers: 'Michael Mossier, Tommy Han, Scott  Han',
        rating: 'Super Hit'
    },
]

export default function page() {
    return (
        <>
            <section>


                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Databale</h5>
                            <DataTable
                                columns={columns}
                                data={data}
                                pagination
                                defaultSortFieldId={1}
                            />
                        </div>
                    </div>

                </div>


            </section>
        </>
    )
}
