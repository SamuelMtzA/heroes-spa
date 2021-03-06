import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers';

export const HeroPage = () => {
  const {id} = useParams();
  // memory of the value of the id param
  const hero = useMemo(() => getHeroById(id), [id]);

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
    <div className='row mt-5 animate__animated animate__bounce animate__fadeIn'>
      <div className="col-4 animate__animated  animate__fadeInUp" style={{width:"220px", height:"220px"}} >
        <img src={path} alt={hero.superhero} className='img-thumbnail'/>
      </div>
      <div className="col-8 animate__animated animate__heartBeat">
        <h3 style={{textAlign:"center"}}>{hero.superhero}</h3>
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

