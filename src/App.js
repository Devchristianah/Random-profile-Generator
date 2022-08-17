import axios from 'axios';
import React, { Fragment, useState } from 'react';
import './App.css';
import Button from './Component/Button';

const App=()=> {
  /*populate userdata from Api*/
  const [userData,setUserData]= useState([]);
  const [loading,setLoading]= useState(false);

  /*used logic between the button to get user or another user*/
  const[activeUser,setActiveUser]=useState(false);

/* logic for fetching data*/
  const onClickHandler = ()=>{
    setLoading(true);
    axios.get( 'https://randomuser.me/api/')
    .then((response)=>{
      console.log(response.data.results);
      setUserData(response.data.results);
    }).catch((error)=>{
      console.log(error);
      setLoading(true);
    }).finally(()=>{
      setLoading(false);
      setActiveUser(true);
    })
  }

  
  

  return (
    <div className='App'>
      <div className='appcard'>
      <h1>Random Profile Generator </h1>
      <Button isActive={activeUser} clicked={onClickHandler}/>
      {loading?(
        <h1>Loading...</h1>
      ):(
        <div className='app__user'>
          {userData.map((user,index)=>{
            return(
              <Fragment key={user.cell}>
               <img src={user.picture.large} alt="#"/> 
               <h3> Last Name:{user.name.last}</h3>
               <h3> First Name: {user.name.first}</h3> 

               
              </Fragment>
            )
          })}
          
        </div>
      )}

      </div>    
    </div>
  );
}

export default App;
