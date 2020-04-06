import React from 'react'
import {useTheme} from 'react-jss'
import useStyles from '../styles/TopBanner.styles';
import cl from '../../utils/classList'
import Chart from './Chart'
import Progress from './Progress'

export default ()=>{
    const theme =  useTheme();
    const classes = useStyles(theme)
    return <>
    <div className={cl(
        classes.root
    )}>
        <h3>Hi Alan!</h3>
        <p>Dashboard overview and learning summary</p>
    </div>
    <div className={cl(
        classes.bars,
        'row'
    )}>
    <Chart/>
    <Progress/>
    </div>
    </>
}