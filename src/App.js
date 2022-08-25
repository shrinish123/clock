
import React,{useState,useEffect} from 'react';

import './App.css';
import Clock from './Clock';


const App =() => {

  const [secRatio,setSecRatio] = useState(0);
  const [minRatio,setMinRatio] = useState(0);
  const [hourRatio,setHourRatio] = useState(0);

  useEffect(()=>{


    const setClock= () => {
       
      const curDate = new Date();

      const secRatio = (curDate.getSeconds() )/60;
      const minRatio = (secRatio + curDate.getMinutes())/60;
      const hourRatio = (minRatio + curDate.getHours())/12;

      setSecRatio(secRatio); setMinRatio(minRatio);setHourRatio(hourRatio);
    }

    setInterval(() => {
            setClock()
          }, 1000);
  },[]);


  return (
    <Clock secondRatio={secRatio} minuteRatio={minRatio} hourRatio={hourRatio}/>
  )

}



export default App;