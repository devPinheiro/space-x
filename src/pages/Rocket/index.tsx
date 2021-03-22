import React, { useState, useEffect, FormEvent } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';

// components
import { Link, Redirect } from 'react-router-dom';
import { fetchAllRockets } from '../../store/actions/fetch-all-rockets';

// styles
import './home.scss';
import { Rockets } from '../../store/actions/interfaces';




const RocketView = () => {
  // manage state
  const rocketState = useSelector((s: any) => s.fetchSingleRocket);
  const [rocketData, setRocketData] = useState([])

  const dispatch = useDispatch();
  const { addToast } = useToasts();

 
  // useEffect for fetching all rockets mimics ComponentDidMount
  useEffect(()=>{
    dispatch(fetchAllRockets())
  },[]);

  useEffect(()=>{
    if(rocketState.isSuccessful){
      setRocketData(rocketState.data)
    }

    if(!rocketState.isSuccessful && rocketState.error){
      addToast(rocketState.error, { appearance: 'error' })
    }
  }, [rocketState, addToast])

  return (
    <>
    <h1 className='title'>Rockets</h1>
    <div className="home_container">
  { rocketState.isLoading && <span>Loading...</span>}
    

    {
      rocketData && rocketData.map((rocket: Rockets, index) =>{
          return <div className='card' key={index}>
              <img src={rocket.flickr_images[0]} />
              <p>{rocket.name}</p>
            </div>
      })
    }
    </div>
  
     
    </>
  );
};

export default RocketView;
