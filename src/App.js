import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': 'Changhwan Lee',
  'birthday': '951127',
  'gender': 'male',
  'job': 'student'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': 'Hello',
  'birthday': '951127',
  'gender': 'male',
  'job': 'word'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': 'World',
  'birthday': '951127',
  'gender': 'male',
  'job': 'word'
}]

function App() {
  return (
      <div>
        {customers.map(c => {return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
      </div>
  );
}

export default App;
