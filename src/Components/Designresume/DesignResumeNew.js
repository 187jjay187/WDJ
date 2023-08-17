/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { Container, Row, Button } from 'react-bootstrap';
import { AiOutlineDownload } from 'react-icons/ai';
import { Document, Page, pdfjs } from 'react-pdf';
import pdf from '../../Assets/Jerome G.O. Design Portfolio.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function DesignResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function goToPreviousPage() {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  }

  function goToNextPage() {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={goToPreviousPage}
          >
            Previous
          </button>
        </div>

        <Row className="designresume">
          <Document file={pdf} className="d-flex justify-content-center" onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} scale={1.7} />
          </Document>
        </Row>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            type="button"
            disabled={pageNumber <= 1}
            onClick={goToPreviousPage}
          >
            Previous
          </button>
          <button
            type="button"
            disabled={pageNumber >= numPages}
            onClick={goToNextPage}
          >
            Next
          </button>
        </div>
        <p style={{ margin: '10px' }}>
          Page
          {' '}
          {pageNumber}
          {' '}
          of
          {' '}
          {numPages}
        </p>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: '250px' }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={goToNextPage}
            >
              Next
            </button>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default DesignResumeNew;
