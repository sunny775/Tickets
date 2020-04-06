import React from 'react'
import cl from '../../utils/classList';
import useStyles from '../styles/Progress.styles'
import {ProgressBar} from 'react-bootstrap'
import {useTheme} from 'react-jss'

export default ()=>{
    const theme = useTheme()
    const classes = useStyles(theme);
    
    return <div className={cl(
        classes.rt,
        'col-sm-4'
    )} style={{border:'1px solid re',padding:20,}}>
        <h6>Completed Courses</h6>
        <div style={{background:'#8884d8',color:'white',padding:10,marginBottom:2}}>
        <p>Programming<span style={{float:'right'}}>40%</span></p>
        <ProgressBar now={40} />
        </div>
        <div style={{background:'#82ca9d',color:'white',padding:10,marginBottom:2}}>
        <p>Mathematics<span style={{float:'right'}}>30%</span></p>
        <ProgressBar now={30} />
        </div>
        <div style={{background:'rgba(0,100,150,0.5)',color:'white',padding:10,marginBottom:2}}>
        <p>Chemistry<span style={{float:'right'}}>30%</span></p>
        <ProgressBar now={30} />
        </div>

    </div>
}