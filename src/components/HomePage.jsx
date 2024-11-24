import React from 'react';
import { Box, Typography, Card, CardContent, Grid } from '@mui/material';
import './HomePage.css';
import image from './image.png'; // Importing the image

const HomePage = () => (
  <Box className="homepage-container">
    {/* Header Section */}
    <header className="header-section">
      <Typography variant="h3" className="header-title">
        Apple iPhone Review Analysis (2022-2024)
      </Typography>
      <Typography variant="body1" className="header-subtitle">
        Explore trends, customer sentiment, and performance insights for the iPhone series.
      </Typography>
    </header>

    {/* Theory Section */}
    <section className="theory-section">
      <Typography variant="h5" className="theory-title">
        About the Project
      </Typography>
      <Box className="theory-content">
        <Box className="theory-text">
          <Typography variant="body1">
            This project delves into the sentiment and trends surrounding Apple iPhone models from 2022 to 2024. By analyzing customer reviews and feedback, it provides actionable insights into:
          </Typography>
          <ul className="theory-points">
            <li>Top features appreciated by customers.</li>
            <li>Areas for improvement based on user feedback.</li>
            <li>Shifts in consumer expectations over time.</li>
            <li>Competitor analysis and market trends.</li>
          </ul>
          <Typography variant="body1">
            This analysis equips businesses and tech enthusiasts with data-driven insights to better understand customer behavior and market dynamics.
          </Typography>
        </Box>
        <Box className="theory-image-container">
          <img src={image} alt="iPhone Analysis" className="theory-image" />
        </Box>
      </Box>
    </section>

    {/* Key Insights Section */}
    <section className="insights-section">
      <Typography variant="h5" className="insights-title">
        Key Insights
      </Typography>
      <Grid container spacing={4} className="insights-grid">
        {[
          {
            title: 'Positive Sentiment Dominance',
            description: '85% of reviews are positive, showcasing high customer satisfaction.',
          },
          {
            title: 'Top Features Highlighted',
            description: 'Customers praised cameras, battery life, and performance as key strengths.',
          },
          {
            title: 'Impact of Innovation',
            description: 'iPhone 14 and 15 led the market due to unique features like crash detection.',
          },
          {
            title: 'User Upgrade Patterns',
            description: 'Major upgrades were driven by improvements in camera and processing power.',
          },
          {
            title: 'Market Trends',
            description: 'Steady growth in user satisfaction with advanced technology adoption.',
          },
          {
            title: 'Global Perspective',
            description: 'Reviews reflect preferences across different regions, emphasizing varied priorities.',
          },
        ].map((insight, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card className="insight-card">
              <CardContent>
                <Typography variant="h6" className="insight-title">
                  {insight.title}
                </Typography>
                <Typography variant="body2" className="insight-description">
                  {insight.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </section>

    {/* Footer */}
    <footer className="footer">
      <div className="container text-center">
        <p className="footer-text">© 2024 iPhone Review Analysis | Powered by React & Material-UI</p>
      </div>
    </footer>
  </Box>
);

export default HomePage;
