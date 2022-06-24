import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/UseForm'
import queryString from 'query-string';

export const SearchPage = () => {
  const navigate = useNavigate();
  // to get the query params from the url
  const location = useLocation();
  // console.table(location);
  const { q = '' } = queryString.parse(location.search);

  const { searchText, onInputChange } = useForm({
    searchText: '',
  })

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchText.trim().length <= 1) {
      return;
    }
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
          <div className="row">
            <div className="col-4">
              <img src="https://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16/portrait_incredible.jpg" alt="Monster"/>
            </div>
            <div className="alert alert-danger">
              No hero found with {q}
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
