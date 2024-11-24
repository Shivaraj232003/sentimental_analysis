import React from 'react';
import { Box, Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import './view.css'; // Custom CSS file
import powerBiImage from './image1.png'; // Import Power BI image
import downloadImage from './image2.png'; // Import Download image

const ViewPage = () => {
  // Function to download the PDF
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-pdf-file.pdf'; // Replace with the actual path
    link.download = 'iPhone_Report.pdf';
    link.click();
  };

  return (
    <Box className="container-fluid home-container">
      {/* Hero Section */}
      <section className="hero-section text-center py-5">
        <h1 className="display-4 text-gradient mb-4">Welcome to Power BI Dashboard</h1>
        <p className="lead text-white">
          Visualize your data, explore trends, and make smarter decisions with interactive dashboards and reports.
        </p>
      </section>

      {/* Main Content */}
      <div className="row">
        {/* Left Part - Download Option */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-4">
          <h2 className="text-center text-white mb-4">Download iPhone Report</h2>
          <img src={downloadImage} alt="Download Report" className="img-fluid mb-4 custom-img" />
          <Button
            variant="contained"
            onClick={downloadPDF}
            className="btn btn-primary custom-btn"
          >
            Download PDF
          </Button>
        </div>

        {/* Right Part - View Power BI Report */}
        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center p-4">
          <h2 className="text-center text-white mb-4">View Power BI Report</h2>
          <img src={powerBiImage} alt="Power BI Report" className="img-fluid mb-4 custom-img" />
          <a
            href="https://app.powerbi.com/reportEmbed?reportId=592690f0-f181-4cb1-bf1d-e2afd1ab9e2c&autoAuth=true&ctid=989bd926-7d97-4eca-8a90-83492821bed1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success custom-btn"
          >
            View Report
          </a>
        </div>
      </div>

      {/* Highlights Section */}
      <section className="highlights-section text-center py-5">
        <h2 className="text-white mb-4">Key Features of Our Power BI Dashboard</h2>
        <div className="row">
          <div className="col-md-4 p-3">
            <div className="highlight-card">
              <h3>Interactive Visualizations</h3>
              <p>
                Explore trends and insights with graphs, charts, and interactive visuals tailored to your needs.
              </p>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="highlight-card">
              <h3>Real-Time Analytics</h3>
              <p>
                Stay up-to-date with live data and real-time performance tracking across key business areas.
              </p>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <div className="highlight-card">
              <h3>Custom Reports</h3>
              <p>
                Generate and export tailored reports to analyze your business performance offline.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 footer">
        <p className="text-white">
          &copy; 2024 Power BI Dashboard |   Empowering businesses with data insights.
        </p>
      </footer>
    </Box>
  );
};

export default ViewPage;
