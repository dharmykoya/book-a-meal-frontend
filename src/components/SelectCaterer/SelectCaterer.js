import React from 'react';
import Caterer from './Caterer/Caterer';
import MrBiggs from '../../assets/images/mr_bigs.jpg';
import Mavise from '../../assets/images/mavise.jpg';
import JesusEmbassey from '../../assets/images/mavise.jpg';
import SweetSensation from '../../assets/images/sweet.png';
import KFC from '../../assets/images/kfc.png';
import Glamours from '../../assets/images/glam.jpg';
import classes from './SelectCaterer.css';


const caterers = [
  { id: 1, name: 'Mr Biggs', image: '/../../assets/images/mr_bigs.jpg', time: '25 - 30 mins'},
  { id: 2, name: 'Mavise', image: '/../../assets/images/mavise.jpg', time: '25 - 30 mins'} ,
  { id: 3, name: 'JesusEmbassey', image: '/../../assets/images/food1.jpg', time: '25 - 30 mins'} ,
  { id: 4, name: 'SweetSensation', image: '/../../assets/images/sweet.png',  time: '25 - 30 mins'} ,
  { id: 5, name: 'KFC', image: '/../../assets/images/kfc.png', time: '25 - 30 mins'} ,
  { id: 6, name: 'Glamours', image: '/../../assets/images/glam.jpg', time: '25 - 30 mins'}
]
const selectCaterer = () => (
    <div className={classes.selectCaterer}>
      <h2>Select a Restaurant</h2>
      
      <div className={classes.catererContainer}>
        {
          caterers.map((caterer) => (
          <Caterer 
            key={caterer.id}
            link={`place-order/${caterer.id}`} 
            imageLink={caterer.image}
            time={caterer.time}
          >
            {caterer.name}
          </Caterer>
        ))}
      </div>
    </div>
)


export default selectCaterer;