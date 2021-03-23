import React, { useState, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// components
import { fetchSingleRocket } from '../../store/actions/fetch-single-rocket';
import Loader from '../../components/SVGComponents/logo';
import ErrorPage from '../../components/SVGComponents/404';
import Badge from '../../components/Badge';

// styles
import './rocket.scss';
import { Rockets } from '../../store/actions/interfaces';

interface Props {
  match: {
    params: {
      id: string;
    };
  };
}

interface Rocket {
  name: string;
  cost_per_launch: string;
  active: string;
  flickr_images: any[];
  success_rate_pct: number;
  first_flight: string;
  description: string;
}

const RocketView = (props: Props) => {
  // manage state
  const rocketState = useSelector((s: any) => s.fetchSingleRocket);
  const [rocketData, setRocketData] = useState<Rocket | null>(null);
  const [error, setError] = useState('')

  const dispatch = useDispatch();
  const { addToast } = useToasts();

  // useEffect for fetching single rockets mimics ComponentDidMount using rocket id
  useEffect(() => {
    const { id } = props.match.params;
    if (id) dispatch(fetchSingleRocket(id));
  }, []);

  // handles use cases for handling errors and success
  useEffect(() => {
    if (rocketState.isSuccessful) {
      setRocketData(rocketState.data);
    }

    if (!rocketState.isSuccessful && rocketState.error) {
      addToast(rocketState.error, { appearance: 'error' });
      setError(rocketState.error)
    }
  }, [rocketState, addToast]);

  return (
    <>
      <h1 className='title'>
        <Link to='/'>Rockets </Link>&gt;{' '}
        <span className='active'>{rocketData && rocketData.name}</span>
      </h1>
      <div className='rocket_container'>
        {rocketState.isLoading ? (
          <Loader className='spinner' />
        ) : error ? (<ErrorPage />) :(
          <div className='card'>
            <div className='section'>
              <div className='section_a'>
                <img
                  src={
                    rocketData &&
                    rocketData.flickr_images &&
                    rocketData.flickr_images[0]
                  }
                />
              </div>

              <div className='section_b'>
                <p className='title'>{rocketData && rocketData.name}</p>
                <p>
                  First Flight:{' '}
                  <span>
                   {rocketData && new Date(rocketData.first_flight).toLocaleDateString(
                      'en-US',
                      {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      }
                    )}
                  </span>
                </p>
                <p>
                  Cost ${' '}
                  <span>
                    {rocketData &&
                      rocketData.cost_per_launch &&
                      rocketData.cost_per_launch.toLocaleString()}
                  </span>
                </p>

                <p>
                  <span>{ rocketData && rocketData.active ? 'Active' : 'Inactive'}</span>
                </p>

                <div className='success'>
                  Success Rate:{' '}
                  <Badge
                    status={
                      rocketData && rocketData.success_rate_pct > 59
                        ? 'green'
                        : rocketData && rocketData.success_rate_pct > 38 &&
                          rocketData.success_rate_pct < 60
                        ? 'orange'
                        : 'red'
                    }
                  />
                </div>
                <div>
                  <Link
                    className='btn'
                    to={{
                      pathname: 'https://en.wikipedia.org/wiki/SpaceX_Starship',
                    }}
                    target='_blank'>
                    View More
                  </Link>
                </div>
              </div>
            </div>

            <p className="desc">{rocketData &&rocketData.description}</p>

            <div className='image_listview'>
              {rocketData &&
                rocketData.flickr_images &&
                rocketData.flickr_images.map((item: string, index: number) => {
                  return (
                    <div className='image' key={index}>
                      <img src={item} />
                    </div>
                  );
                })}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RocketView;
