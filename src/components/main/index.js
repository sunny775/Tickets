import React from 'react';
import SideBar from './SideBar'
import TopBanner from './TopBanner'
import Card from './CourseCard';

export default ()=>{

    return <div className='row' style={{margin:'0 !important'}}>
        <SideBar/>
        <div className='col-sm-9' style={{margin:0,padding:0}}>
        <TopBanner/>
        <div style={{marginTop:270}}>
        <Card/>
        </div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
<Card/>
        </div>
        
    </div>
}