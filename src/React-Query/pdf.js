import React from 'react';
import MyPdfDocument from "./list"

const PDF_FILE = "http://localhost:3000/Paul-Pius-frontend.pdf"

const DownloadPDFButton = () => {

  
  const downloadPdf = (url) => {
    // const blob = new Blob([<MyPdfDocument />,], { type: 'application/pdf' });
    // const url = URL.createObjectURL(blob);
    // const a = document.createElement('a');
    // a.href = url;
    // a.download = 'my-document.pdf';
    // a.click();
    // URL.revokeObjectURL(url);
    const fileName = url.split('/').pop();
    const aTag = document.createElement('a');
    aTag.href = url;
    aTag.setAttribute("download", fileName)
    document.body.appendChild(aTag)
    aTag.click();
    aTag.remove();
  };

  return (
    <button style={{width:"80%", whiteSpace:"nowrap", height:40, fontSize:"1.1rem",border:"1px solid red"}} onClick={()=>{downloadPdf(PDF_FILE)}}>Download PDF</button>
  );
};

export default DownloadPDFButton;


// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// import { useState } from 'react';
// import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';



// const ReactPDF =() =>{
//     const imageKitURL = 'https://docs.google.com/document/d/19UwcCZAG6K8AduxD__Rh_mCZgi2bYiV0gPL5jUQcAX8/edit';
//     // const pdf = `${imageKitURL}/test_files/file-example_PDF_1MB.pdf`;

//     // const [numPages, setNumPages] = useState(null);
//     // const [pageNumber, setPageNumber] = useState(1);

//     // function onDocumentLoadSuccess({ numPages }) {
//     //     setNumPages(numPages);
//     //     setPageNumber(1);
//     // }

//     // function changePage(offset) {
//     //     setPageNumber((prevPageNumber) => prevPageNumber + offset);
//     // }

//     // function previousPage() {
//     //     changePage(-1);
//     // }

//     // function nextPage() {
//     //     changePage(1);
//     // }

//     return (
//         <>
//             {/* <div>
//                 <p>
//                     Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
//                 </p>
//                 <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
//                     Previous
//                 </button>
//                 <button type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
//                     Next
//                 </button>
//             </div> */}
//             {/* eslint-disable-next-line react/jsx-no-bind */}
//             <Document file={imageKitURL} onLoadSuccess={onDocumentLoadSuccess}>
//                 {/* <Page pageNumber={pageNumber} /> */}
//             </Document>
//         </>
//     );
// }
// export default ReactPDF;

// https://docs.google.com/document/d/1cvzFbSuXgXCs4r1tDBKJjuWRvcVjaOefp9zi9m8-86g/edit