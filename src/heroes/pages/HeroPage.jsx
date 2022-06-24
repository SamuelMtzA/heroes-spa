import React from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const {id} = useParams();
  
  const hero = getHeroById(id);

  const navigateTo = useNavigate();

  const path = `/assets/heroes/${id}.jpg`;
  
  if(!hero){
    alert('Hero not found');
    return <Navigate to='/'/>
  }

  const onNavigateBack = () => {
    (hero.publisher === 'DC Comics') 
      ?navigateTo('/dc')
        :navigateTo('/marvel');
  }
  
  return (
    <div className='row mt-5'>
      <div className="col-4">
        <img src={path} alt={hero.superhero} className='img-thumbnail'/>
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul>
          <li className='list-group-item'> <b>Alter ego: </b>{hero.alter_ego}</li>
          <li className='list-group-item'> <b>Publisher: </b>{hero.publisher}</li>
          <li className='list-group-item'> <b>First appearance: </b>{hero.first_appearance}</li>

          <h5 className='mt-3' >Characters</h5>
          <p>{hero.characters}</p>

          <button onClick={onNavigateBack} className='btn btn-outline-primary'>
            Back
          </button>
        </ul>
      </div>
    </div>
  )
}

