import {Document, Page} from 'react-pdf';
import resume from "../PdfViewer/PdfViewer";


const PdfViewer = () => {
  return (
    <Document file={resume}>
        <Page pageNumber={1}></Page>
    </Document>
  )
}

export default PdfViewer