import React, { useMemo, useState } from 'react';
import Table from '../../components/Table';
import { tData } from '../../data/TableData';
import TButton from '../../components/Table/TButton';
import Eye from '../../components/Icons/Eye';
import Edit from '../../components/Icons/Edit';
import Delete from '../../components/Icons/Delete';
import Send from '../../components/Icons/Send';
import PageTop from '../../components/PageTop';
import style from './ticket.module.scss'
import Button from '../../components/Button';

const Ticket = () => {
  const [tableData, setTableData] = useState(tData);

  const handleTData = (rowData) => {
    const filteredData = tableData.filter((data) => 
    {
      console.log(data)
      return data.Ticket_ID !== rowData.Ticket_ID;
    });
    setTableData(filteredData);
  };
  
  const tColumns = useMemo(() => [
    {
      header: "Table",
      columns: [
        {
          header: "Ticket Id",
          accessorKey: "Ticket_ID",
        },
        {
          header: "Agent / Customer",
          accessorKey: "Agent_Customer",
        },
        {
          header: "Wallet ID",
          accessorKey: "Wallet_ID",
        },
        {
          header: "Created",
          accessorKey: "Created",
        },
        {
          header: "Date",
          accessorKey: "Date",
        },
        {
          header: "Time",
          accessorKey: "Time",
        },
        {
          header: "Route",
          accessorKey: "Route",
        },
        {
          header: "Source",
          accessorKey: "Source",
        },
        {
          header: "Created By",
          accessorKey: "Created_By",
        },
        {
          header: "Project",
          accessorKey: "Project",
        },
        {
          header: "Vertical",
          accessorKey: "Vertical",
        },
        {
          header: "Sub-Vertical",
          accessorKey: "sub-vertical",
          cell: (tData) => {
            const rowData = tData.row.original;
            console.log(rowData);
            return <div className='table_btn_group'>
              <TButton><Eye fill={"#85379d"}/></TButton>
              <TButton><Edit fill={'#5c564f'}/></TButton>
              <TButton onClick={() => handleTData(rowData)}><Delete fill={'#ff0000'}/></TButton>
              <TButton><Send fill={'#6d8795'}/></TButton>
            </div>;
          },
        },
      ],
    },
  ], [tableData]);

  return (
    <section>
      <div className={style.btnWrapper}>
        <Button 
        variant="blue" 
        rounded="full"
        onClick={()=>alert("Add New ticket was pressed")}>Add New Ticket</Button>
      </div>
      <hr />
      <PageTop/>
     <div className="">
     <Table 
      columns={tColumns} 
      data={tableData} />
     </div>
    </section>
  )
}

export default Ticket;
