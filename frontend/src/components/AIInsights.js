import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { 
  LineChart, Line, AreaChart, Area, BarChart, Bar, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';
import { 
  FaBrain, FaChartLine, FaLightbulb, FaExclamationTriangle, FaCheckCircle, FaClock, FaMapMarkerAlt 
} from 'react-icons/fa';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { motion } from 'framer-motion';

const AIInsights = () => {
  const [aiInsights, setAiInsights] = useState(null);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [sentimentText, setSentimentText] = useState('');
  const [sentimentResult, setSentimentResult] = useState(null);
  const [cropRecommendations, setCropRecommendations] = useState([]);

  useEffect(() => {
    fetchAIInsights();
    fetchUserData();
    if (user?.userType === 'farmer') {
      fetchCropRecommendations();
    }
  }, [user]);

  const fetchAIInsights = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:8000/api/ai-insights', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAiInsights(response.data.aiInsights);
    } catch (error) {
      console.error('Error fetching AI insights:', error);
      toast.error('Failed to fetch AI insights');
    } finally {
      setLoading(false);
    }
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/api/userData', {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setUser(response.data.object);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const analyzeSentiment = async () => {
    if (!sentimentText.trim()) {
      toast.error('Please enter text for sentiment analysis');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8000/api/sentiment-analysis', 
        { text: sentimentText },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setSentimentResult(response.data.sentiment);
      toast.success('Sentiment analysis completed');
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
      toast.error('Failed to analyze sentiment');
    }
  };

  const getSentimentColor = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-600 bg-green-100';
      case 'negative':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getSentimentIcon = (sentiment) => {
    switch (sentiment) {
      case 'positive':
        return <TrendingUpIcon style={{ color: 'green' }} />;
      case 'negative':
        return <TrendingDownIcon style={{ color: 'red' }} />;
      default:
        return <FaChartLine className="text-gray-500" />;
    }
  };

  const fetchCropRecommendations = async () => {
    try {
      const token = localStorage.getItem('token');
      const userLocation = `${user?.city}, ${user?.state}`;
      
      // Enhanced crop recommendations based on location and season
      const recommendations = await axios.post('http://localhost:8000/api/ai-insights', {
        location: userLocation,
        requestType: 'cropRecommendations',
        season: getCurrentSeason(),
        soilType: getSoilTypeByLocation(user?.state)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      setCropRecommendations(recommendations.data.recommendations || getFallbackRecommendations(userLocation));
    } catch (error) {
      console.error('Error fetching crop recommendations:', error);
      setCropRecommendations(getFallbackRecommendations(`${user?.city}, ${user?.state}`));
    }
  };

  const getCurrentSeason = () => {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 6) return 'summer';
    if (month >= 7 && month <= 10) return 'monsoon';
    return 'winter';
  };

  const getSoilTypeByLocation = (state) => {
    const soilTypes = {
      'Maharashtra': 'black',
      'Punjab': 'alluvial',
      'Haryana': 'alluvial',
      'Uttar Pradesh': 'alluvial',
      'Madhya Pradesh': 'black',
      'Karnataka': 'red'
    };
    return soilTypes[state] || 'alluvial';
  };

  const getFallbackRecommendations = (location) => {
    const season = getCurrentSeason();
    const recommendations = {
      'Mumbai, Maharashtra': {
        summer: [
          { name: 'Tomatoes', profit: 'High', reason: 'High demand in local markets', season: 'Summer' },
          { name: 'Cucumber', profit: 'Medium', reason: 'Good for summer cultivation', season: 'Summer' },
          { name: 'Okra', profit: 'High', reason: 'Drought resistant and profitable', season: 'Summer' }
        ],
        monsoon: [
          { name: 'Rice', profit: 'High', reason: 'Perfect for monsoon season', season: 'Monsoon' },
          { name: 'Corn', profit: 'Medium', reason: 'Good monsoon crop', season: 'Monsoon' },
          { name: 'Soybeans', profit: 'High', reason: 'High protein demand', season: 'Monsoon' }
        ],
        winter: [
          { name: 'Wheat', profit: 'High', reason: 'Staple crop with good prices', season: 'Winter' },
          { name: 'Peas', profit: 'Medium', reason: 'Winter vegetable', season: 'Winter' },
          { name: 'Carrots', profit: 'High', reason: 'High demand in winter', season: 'Winter' }
        ]
      }
    };
    
    return recommendations[location]?.[season] || recommendations['Mumbai, Maharashtra'][season];
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <div className="flex items-center space-x-3 mb-4">
            <FaBrain className="text-3xl text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">AI-Powered Insights</h1>
              <p className="text-gray-600">
                Advanced market analysis and recommendations powered by Google Gemini AI
              </p>
            </div>
          </div>
          {aiInsights?.lastUpdated && (
            <div className="flex items-center text-sm text-gray-500">
              <FaClock className="mr-2" />
              Last updated: {new Date(aiInsights.lastUpdated).toLocaleString()}
            </div>
          )}
        </motion.div>

        {/* Enhanced Location-Based Crop Recommendations - MOVED TO TOP */}
        {user?.userType === 'farmer' && cropRecommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-lg shadow-md p-6 mb-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-green-500" />
              AI-Powered Crop Recommendations
              <span className="ml-2 text-sm text-gray-500">
                ({user?.city}, {user?.state})
              </span>
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Recommended Crops for {getCurrentSeason().charAt(0).toUpperCase() + getCurrentSeason().slice(1)}</h4>
                <div className="space-y-3">
                  {cropRecommendations.map((crop, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <h5 className="font-semibold">{crop.name}</h5>
                        <span className={`px-2 py-1 rounded text-xs font-semibold ${
                          crop.profit === 'High' ? 'bg-green-100 text-green-800' :
                          crop.profit === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {crop.profit} Profit
                        </span>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        <span className="font-medium">Season:</span> {crop.season}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Reason:</span> {crop.reason}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-3">AI Analysis</h4>
                <div className="space-y-3">
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h5 className="font-medium text-green-800">Soil Type</h5>
                    <p className="text-sm text-green-700">{getSoilTypeByLocation(user?.state)} soil</p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h5 className="font-medium text-blue-800">Current Season</h5>
                    <p className="text-sm text-blue-700">{getCurrentSeason().charAt(0).toUpperCase() + getCurrentSeason().slice(1)}</p>
                  </div>
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <h5 className="font-medium text-purple-800">Market Conditions</h5>
                    <p className="text-sm text-purple-700">Based on local demand and supply patterns</p>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                  <h5 className="font-medium text-gray-800 mb-2">Google Gemini AI Insights</h5>
                  <p className="text-sm text-gray-600">
                    These recommendations are powered by Google Gemini AI, analyzing your location ({user?.city}, {user?.state}), 
                    current season ({getCurrentSeason()}), soil type ({getSoilTypeByLocation(user?.state)}), 
                    and market demand patterns.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* AI Insights Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Market Insights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaLightbulb className="mr-2 text-yellow-500" />
              Google Gemini AI Market Insights
            </h3>
            <div className="space-y-3">
              {aiInsights?.insights?.map((insight, index) => (
                <div key={index} className="p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">{insight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaCheckCircle className="mr-2 text-green-500" />
              Google Gemini AI Recommendations
            </h3>
            <div className="space-y-3">
              {aiInsights?.recommendations?.map((rec, index) => (
                <div key={index} className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-700">{rec}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Demand Patterns */}
        {aiInsights?.demandPatterns && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-6 mb-6"
          >
            <h3 className="text-lg font-semibold mb-4">Demand Patterns Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">High Demand Products</h4>
                <ul className="text-sm text-gray-700">
                  {aiInsights.demandPatterns.patterns?.highDemand?.slice(0, 5).map((product, index) => (
                    <li key={index} className="flex items-center">
                      <TrendingUpIcon className="text-green-500 mr-2" />
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h4 className="font-semibold text-red-700 mb-2">Low Demand Products</h4>
                <ul className="text-sm text-gray-700">
                  {aiInsights.demandPatterns.patterns?.lowDemand?.slice(0, 5).map((product, index) => (
                    <li key={index} className="flex items-center">
                      <TrendingDownIcon className="text-red-500 mr-2" />
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-700 mb-2">Demand Recommendations</h4>
                <ul className="text-sm text-gray-700">
                  {aiInsights.demandPatterns.recommendations?.slice(0, 3).map((rec, index) => (
                    <li key={index} className="mb-2">• {rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Price Predictions */}
        {aiInsights?.pricePredictions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 mb-6"
          >
            <h3 className="text-lg font-semibold mb-4">Price Trend Predictions</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={aiInsights.pricePredictions.predictions}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="period" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="predictedPrice" stroke="#8884d8" name="Predicted Price" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold mb-2">Prediction Details</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Methodology:</strong> {aiInsights.pricePredictions.methodology}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Confidence:</strong> {(aiInsights.pricePredictions.confidence * 100).toFixed(1)}%
                  </p>
                </div>
                <div className="space-y-2">
                  {aiInsights.pricePredictions.predictions?.map((pred, index) => (
                    <div key={index} className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Period {pred.period}</span>
                        <span className="text-lg font-bold">₹{pred.predictedPrice.toFixed(2)}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Confidence: {(pred.confidence * 100).toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Risk Assessment */}
        {aiInsights?.cropRecommendations?.riskAssessment && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-md p-6 mb-6"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <FaExclamationTriangle className="mr-2 text-orange-500" />
              Risk Assessment
            </h3>
            <div className="space-y-2">
              {aiInsights.cropRecommendations.riskAssessment.map((risk, index) => (
                <div key={index} className="p-2 bg-orange-50 rounded text-sm text-orange-800">
                  {risk}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Refresh Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <button
            onClick={fetchAIInsights}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh AI Insights
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AIInsights; 