import React from 'react';
import NewsItem from './NewsItems';

const NewsList = ({ articles }) => (
  <div className="container mt-4">
    <div className="row">
      {articles.map((article, index) => (
        <div className="col-md-4" key={index}>
          <NewsItem article={article} />
        </div>
      ))}
    </div>
  </div>
);

export default NewsList;