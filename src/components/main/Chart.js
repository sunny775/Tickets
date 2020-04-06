import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'JAN', Programming: 5, Mathematics:3 ,Chemistry:2,
  },
  {
    name: 'FEB', Programming: 5, Mathematics:3 ,Chemistry:2,
  },
  {
    name: 'MAR', Programming: 5, Mathematics:3 ,Chemistry:2,
  },
  {
    name: 'APR', Programming: 5, Mathematics:3 ,Chemistry:2,
  },
  
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
        <div className='col-sm-8'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Programming" fill="#8884d8" />
        <Bar dataKey="Mathematics" fill="#82ca9d" />
        <Bar dataKey="Chemistry" fill="rgba(0,100,150,0.5)" />
      </BarChart>
      </div>
    );
  }
}
