import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Ticket#', field: 'number',type:'numeric' },
      { title: 'Open Date', field: 'date' },
      { title: 'Client', field: 'client'},
      { title: 'Owner', field: 'owner'},
      { title: 'Title', field: 'title'},
      { title: 'Category', field: 'category'},
      { title: 'Status', field: 'status'},
      { title: 'Type', field: 'type'},
      { title: 'Priority', field: 'priority'},
      
    ],
    data: [
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      { number:2108,date:'03/27/2020 16:40:08',client:'Bryant',owner:'Classic Stores',title:'OS Installation', category:'software', status:'opened',type:'order',priority:'High (12 hrs)'},
      
    ],
  });

  return (
    <MaterialTable
      title="TICKETS"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
