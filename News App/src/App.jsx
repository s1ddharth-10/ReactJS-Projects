import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/Header';
import NewsList from './Components/NewsList';

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=us&apiKey=60ded4f52b4042e7b30fc31ac1a1f023'
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Header />
      <NewsList articles={articles} />
    </div>
  );
};

export default App;