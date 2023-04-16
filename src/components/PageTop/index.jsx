import React from 'react'
import ReactSelect from '../ReactSelect';
import DatePicker from '../DatePicker';
import Button from '../Button';
import style from "./pageTop.module.scss"
import clsx from 'clsx';
import ScrollFilter from '../ScrollFilter';

const PageTop = ({className}) => {
  const[selectedOption, setSelectedOption] = React.useState(null);
  const[selectTicket,setSelectTicket]=React.useState(null)
  const[selectProject,setSelectProject]=React.useState(null)
  const[selectedDateFrom, setSelectedDateFrom] = React.useState(new Date().toISOString().split("T")[0]);
  const[selectedDateTo, setSelectedDateTo] = React.useState(new Date().toISOString().split("T")[0]);

  const handleDateChangeFrom = (event) => {
    setSelectedDateFrom(event.target.value);
  };
  const handleDateChangeTo = (event) => {
    setSelectedDateTo(event.target.value);
  };
  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  const handleSelectTicket = (selectedOption) => {
    setSelectTicket(selectedOption);
  };
  const handleSelectProject = (selectedOption) => {
    setSelectProject(selectedOption);
  };

  const options = [
    { value: "team_one", label: "Team One" },
    { value: "team_two", label: "Team Two" },
    { value: "team_three", label: "Team Three" },
  ];
  const ticketStatus=[
    {label:"Open",value:'open'},
    {label:'Raised and Closed', value:'Raised and Closed'},
    {label:'In Progress',value:'In Progress'}
  ]
  const projects=[
    {label:"Inhouse project", value:'inhouse'},
    {label:'Outsource Project',value:'outsource'},
    {label:'Support',value:'support'}
  ]
  const filterData=[
    {label:"Ekghanti", value:'ekghanti'},
    {label:'Sapana Sharma',value:'sapanaSharma'},
    {label:'Anil Tharu',value:'anilTyharu'},
    {label:'Ozone Maharjan',value:'ozonMaharjan'}
  ]
  return (
    <section className={clsx(style.pageTop,className)}>
       <div className={style.topBody}>
      <ReactSelect 
      label="Assigned By:"
      options={options} 
      className={style.select} 
      onChange={handleSelectChange} 
      value={selectedOption} 
      isMulti={false} 
      isSearchable={true} 
      placeholder="------"/>

       <ReactSelect 
      label="Group"
      options={options} 
      className={style.select} 
      onChange={handleSelectChange} 
      value={selectedOption} 
      isMulti={false} 
      isSearchable={true} 
      placeholder="------"/>

      {/* <ReactSelect 
      label="Group"
      options={options} 
      className={style.select} 
      onChange={handleSelectChange} 
      value={selectedOption} 
      isMulti={false} 
      isSearchable={true} 
      placeholder="------"/> */}
      <ScrollFilter 
      data={filterData}
      className="scrollFilter"
      label="Assigned To"/>
      </div>
      <div className={style.topBody}>
      <ReactSelect 
      label="Project"
      className={style.select} 
      options={projects} 
      onChange={handleSelectProject} 
      value={selectProject} 
      isMulti={false} 
      isSearchable={true} 
      placeholder="Select Project"/>

       <ReactSelect 
      label="Vertical"
      className={style.select} 
      options={ticketStatus} 
        onChange={handleSelectTicket} 
        value={selectTicket} 
      isMulti={false} 
      isSearchable={true} 
      placeholder="Select Vertical"/>
      
      <ReactSelect 
      label="Sub-Vertical"
      className={style.select} 
      options={ticketStatus} 
      onChange={handleSelectTicket} 
      value={selectTicket} 
      isMulti={false} 
      isSearchable={true} 
      placeholder="Select Sub-vertical"/>
      </div>
      <div className={style.bottomBody}>
        <div className={style.selectGroup}>
        <DatePicker
        label="From"
        onChange={handleDateChangeFrom}
        value={selectedDateFrom}
        className={style.cDatePicker}/>
         <DatePicker
        label="To"
        onChange={handleDateChangeTo}
        value={selectedDateTo}
        className={style.cDatePicker}/>
         <ReactSelect 
        label="Ticket Status"
        className={style.select} 
        options={ticketStatus} 
        onChange={handleSelectTicket} 
        value={selectTicket} 
        isMulti={false} 
        isSearchable={true} 
        placeholder="------"/>
        </div>
        <div className={style.buttonGroup}>
          <Button 
          variant="blue" 
          rounded="full" 
          onClick={()=>alert("Search Button is Pressed")}>Search</Button>
          <Button 
          variant="lightPurple" 
          rounded="full"
          onClick={()=>alert("Clear Button is Pressed")}>Clear</Button>
          <br />
          <Button 
          variant="blue" 
          rounded="full"
          onClick={()=>alert("Export Button is Pressed")}>Export</Button>
          <br />
          <Button 
          variant="blue" 
          rounded="full"
          onClick={()=>alert("View Ticket Button is Pressed")}>View Tickets</Button>
        </div>
      </div>
    </section>
  )
}

export default PageTop