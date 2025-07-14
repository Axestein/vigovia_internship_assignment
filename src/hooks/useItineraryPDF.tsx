import { useState, useRef } from 'react';
import { PDFDownloadLink, PDFViewer, BlobProvider } from '@react-pdf/renderer';
import { ItineraryPDF } from '../components/ItineraryPdf';
import type { ItineraryFormData } from '../types/itinerary';

export const useItineraryPDF = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [pdfData, setPdfData] = useState<ItineraryFormData | null>(null);
  const pdfPreviewRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (data: ItineraryFormData) => {
    setIsGenerating(true);
    try {
      // Ensure all numeric fields are properly converted
      const processedData: ItineraryFormData = {
        ...data,
        days: data.days.map(day => ({
          ...day,
          activities: day.activities.map(activity => ({
            ...activity,
            price: Number(activity.price) || 0,
          })),
          transfers: day.transfers.map(transfer => ({
            ...transfer,
            price: Number(transfer.price) || 0,
            maxPeople: Number(transfer.maxPeople) || 1,
          })),
          flights: day.flights.map(flight => ({
            ...flight,
            price: Number(flight.price) || 0,
          })),
        })),
      };
      setPdfData(processedData);
      setShowPreview(true);
    } catch (error) {
      console.error('Error processing data:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const generateDownloadLink = () => {
    if (!pdfData) return null;
    
    return (
      <BlobProvider document={<ItineraryPDF data={pdfData} />}>
        {({ blob, url, loading }) => {
          if (loading) return <div>Loading document...</div>;
          if (!url) return null;
          
          return (
            <a
              href={url}
              download={`${pdfData.tripName.replace(/\s+/g, '_')}_itinerary.pdf`}
              className="px-4 py-2 rounded-md font-medium bg-green-600 hover:bg-green-700 text-white transition-colors"
            >
              Download Itinerary
            </a>
          );
        }}
      </BlobProvider>
    );
  };

  const PreviewModal = () => {
    if (!pdfData) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-4 w-full max-w-4xl h-[80vh]">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">PDF Preview</h2>
            <button 
              onClick={() => setShowPreview(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
          <div className="h-[calc(100%-50px)]" ref={pdfPreviewRef}>
            <PDFViewer 
              width="100%" 
              height="100%"
              style={{ border: 'none' }}
            >
              <ItineraryPDF data={pdfData} />
            </PDFViewer>
          </div>
          <div className="mt-4 flex justify-center">
            {generateDownloadLink()}
          </div>
        </div>
      </div>
    );
  };

  return { handleGenerate, PreviewModal, showPreview, isGenerating };
};