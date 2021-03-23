import React, { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';

// components
import { Link } from 'react-router-dom';
import { fetchAllRockets } from '../../store/actions/fetch-all-rockets';
import Loader from '../../components/SVGComponents/logo'
import Card from '../../components/Card';

// styles
import './home.scss';

// interfaces
import { Rockets } from '../../store/actions/interfaces';




const Home = () => {
  // manage state
  const [error, setError] = useState('');
  const rocketState = useSelector((s: any) => s.fetchAllRockets);
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
      <div className="grid-row">

   
  { rocketState.isLoading ? <Loader className="spinner" /> :
      rocketData && rocketData.map((rocket: Rockets, index) =>{
          return <Card { ...rocket} />
      })
    }
     </div>
    </div>
  
     
    </>
  );
};

export default Home;
