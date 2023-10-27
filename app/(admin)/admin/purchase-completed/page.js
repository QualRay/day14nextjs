'use client'
import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
//import { ProductService } from './service/ProductService';


export default function page() {

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    let products = [
        {
            id: '1000',
            code: 'f230fh0g3',
            name: 'Bamboo Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 24,
            inventoryStatus: 'INSTOCK',
            rating: 5
        },
        {
            id: '1001',
            code: 'f230fh0aa',
            name: 'Steel Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 20,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },
        {
            id: '1001',
            code: 'f230fh0aa',
            name: 'Steel Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 20,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },
        {
            id: '1001',
            code: 'f230fh0aa',
            name: 'Steel Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 20,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },
        {
            id: '1001',
            code: 'f230fh0aa',
            name: 'Steel Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 20,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },
        {
            id: '1001',
            code: 'f230fh0aa',
            name: 'Steel Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 20,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },
        {
            id: '1001',
            code: 'f230fh0aa',
            name: 'Steel Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 20,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },
        {
            id: '1001',
            code: 'f230fh0aa',
            name: 'Steel Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 20,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },
        {
            id: '1001',
            code: 'f230fh0aa',
            name: 'Steel Watch',
            description: 'Product Description',
            image: 'bamboo-watch.jpg',
            price: 65,
            category: 'Accessories',
            quantity: 20,
            inventoryStatus: 'INSTOCK',
            rating: 3
        },

    ]

    const header = (
        <div className="flex align-items-center justify-content-end gap-2">
            <Button title="csv" type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
        </div>
    );

    return (
        <>

            <div className="card">
            <Tooltip target=".export-buttons>button" position="bottom" />
                
                <DataTable value={products} header={header} tableStyle={{ minWidth: '50rem' }} paginator rows={5} rowsPerPageOptions={[5, 10, 25, 50]}>

                    <Column field="code" header="Id"></Column>
                    <Column field="name" header="Name"></Column>
                    <Column field="category" header="Category"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                    <Column field="rating" header="Rating"></Column>
                </DataTable>
            </div>

        </>
    )
}
