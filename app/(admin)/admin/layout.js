import Header from '@/components/layouts/Header';
import Aside from '@/components/layouts/Aside';
import Footer from '@/components/layouts/Footer';
import Script from 'next/script';

export default function AdminDashboardLayout({ children }) {
    return (
        <>
            <Header />
            <Aside />
            {children}
            <Footer />

            {/* Relative Linking 
            <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
            <Script src="assets/vendor/apexcharts/apexcharts.min.js"></Script>
            <Script src="assets/vendor/chart.js/chart.umd.js"></Script>
            <Script src="assets/vendor/echarts/echarts.min.js"></Script>
            <Script src="assets/vendor/quill/quill.min.js"></Script>
            <Script src="assets/vendor/simple-datatables/simple-datatables.js"></Script>
            <Script src="assets/vendor/tinymce/tinymce.min.js"></Script>
            <Script src="assets/vendor/php-email-form/validate.js"></Script> */}


            {/* Absolute Linking */}
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/js/bootstrap.min.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/apexcharts/3.44.0/apexcharts.min.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.0/chart.umd.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/quill/1.3.7/quill.min.js"></Script>
            <Script src="assets/vendor/simple-datatables/simple-datatables.js"></Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/6.7.1/tinymce.min.js"></Script>
            <Script src="assets/vendor/php-email-form/validate.js"></Script>

        </>
    )
}