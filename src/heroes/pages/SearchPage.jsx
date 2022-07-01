import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/UseForm'
import queryString from 'query-string';
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {
  const navigate = useNavigate();
  // to get the query params from the url
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);
  const heroes = getHeroesByName(q); 

  const { searchText, onInputChange } = useForm({
    searchText: q,
  })

  const isSearching = q.length === 0;
  const isNotHeroFound = q.length > 0 && heroes.length === 0;

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1 className='animate__animated animate__lightSpeedInRight'>Search</h1>
      <hr/>

      <div className="row animate__animated animate__fadeIn">
        <div className="col-5">
          <h4>Searching</h4>
          <hr/>
          <form onSubmit={handleSearchSubmit}>
            <input
            type='text'
            placeholder='Search a hero'
            className='form-control'
            name='searchText'
            autoComplete='off'
            value={ searchText }
            onChange={onInputChange}
            />
            <button className='btn btn-outline-primary mt-1'>
              Search
            </button>

          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>
          <div className="alert alert-primary animate__animated animate__fadeIn" 
            style={{display: isSearching  ? '' : 'none'}}>
            Search a hero
          </div>
          <div className="alert alert-danger animate__animated animate__fadeIn" 
            style={{display: isNotHeroFound  ? '': 'none' }}>
            No hero found with {q}
          </div>

          {
            heroes.map((hero) => (
              <HeroCard key={hero.id} {...hero}/>
            ))
          }
        </div>
      </div>

    </>
  )
}
