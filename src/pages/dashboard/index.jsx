import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

import PageTop from '../../components/PageTop';
import style from "./dashboard.module.scss"

import DonutChart from '../../components/DonutChart';

ChartJS.register(ArcElement, Tooltip, Legend);
const Dashboard = () => {


  //Donut Charts Data
  const seriesOne = [834, 753, 186];
  const labelsOne = ['IME Pay', 'IME Remit', 'Call not connected'];
  const colorsOne= ['#D0B2F6', '#7c3cfa', '#e1e023',];

  const seriesTwo=[75,25];
  const labelsTwo=['urgent','high'];
  const colorsTwo=['#378575','#4922b2',]
  
  const seriesThree=[1,2,67,30]
  const labelsThree=['in progress','closed','Raised and closed','Closed_call_not_connected']
  const colorsThree=["#79ec47","#AFEEEE","#33adc9","#026b8a",]

  const totalSeriesOne = seriesOne.reduce((acc, value) => acc + value, 0);

  return (
   <section>
    <PageTop/>

     <section className={style.dashboardData}>
        <DonutChart colors={colorsOne} series={seriesOne} labels={labelsOne}/>
        <DonutChart colors={colorsTwo} series={seriesTwo} labels={labelsTwo}/>
        <DonutChart colors={colorsThree} series={seriesThree} labels={labelsThree}/>
     </section>
     <section className={style.sumTotal}>
      <div className={style.boxElem}>
      {seriesOne.map((value, index) => (
        <div className={style.seriesElement} key={index}>
          <p className={style.label}>{labelsOne[index]}</p>
          {/* Render corresponding label from labelsOne */}
          <p>{value}</p>
          {/* Render value from seriesOne */}
          
        </div>
      ))}
    
      </div>
      <div className={style.singleElem}>
      <p className={style.label}>Total</p>
          {/* Render corresponding label from labelsOne */}
          <p>{totalSeriesOne}</p>
      </div>
     </section>
   </section>
  )
}

export default Dashboard