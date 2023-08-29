import React from 'react';
import { Document, Page, Text, View, PDFViewer } from '@react-pdf/renderer';

const MyPdfDocument = () => (
  <Document>
    <Page>
      <View>
        <Text>Hello, this is a PDF document generated using React!</Text>
      </View>
    </Page>
  </Document>
);

export default MyPdfDocument;
