import React from 'react';
import { Link } from 'react-router-dom';
import { Rockets } from '../../store/actions/interfaces';
import Badge from '../Badge';

const index = (props: Rockets) => {
  const { name, success_rate_pct, flickr_images, first_flight, id } = props;
  return (
    <div className='grid-item' key={id}>
      <Link to={`/rocket/${id}`}>
        <div>
          <img src={flickr_images[0]} />
        </div>

        <p className='rocket_title'>{name}</p>

        <Badge
          status={
            success_rate_pct > 59
              ? 'green'
              : success_rate_pct > 38 && success_rate_pct < 60
              ? 'orange'
              : 'red'
          }
        />
        <p>
          {new Date(first_flight).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>
      </Link>
    </div>
  );
};

export default index;
