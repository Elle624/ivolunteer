import React, { useState, useEffect } from 'react';
import './Postings.scss';
import PostingCard from '../PostingCard';
import Navigation from '../Navigation';

const Postings = ({
  isSorted,
  postings,
  searchByKeyWord,
  filterByCategory,
  sortPostingsByDate,
  resetNavigationQueries
}) => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    const categories = postings.reduce((totalCategories, posting) => {
      if (!totalCategories.includes(posting.category)) {
        totalCategories.push(posting.category);
      }
      return totalCategories.sort();
    }, []);
    setCategories(categories);
  };
  const postingCards = postings.map((posting) => (
    <PostingCard posting={posting} key={posting.id} />
  ));

  useEffect(() => getCategories(), []);

  return (
    <section data-testid='postings-element' className='postings-container-main'>
      <div className='postings-title-wrapper'>
        <h1 className='postings-title'>Open Volunteer Positions</h1>
      </div>
      <Navigation
        isSorted={isSorted}
        searchByKeyWord={searchByKeyWord}
        categories={categories}
        filterByCategory={filterByCategory}
        sortByDate={sortPostingsByDate}
        resetNavigationQueries={resetNavigationQueries}
      />
      <section className='postings-wrapper'>{postingCards}</section>
    </section>
  );
};

export default Postings;
