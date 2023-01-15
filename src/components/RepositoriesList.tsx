import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepositories } from '../actions/actionCreators';
import { RootState } from '../reducers';

const RepositoriesList = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const { loading, error, data } = useSelector(
    (state: RootState) => state.repositories
  );

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(searchRepositories(term) as any);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      <ul>{!error && !loading && data.map((item) => <li>{item}</li>)}</ul>
    </div>
  );
};

export default RepositoriesList;
