import React from 'react';
import {useTheme} from 'react-jss';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles/AppBar.styles';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import cl from '../utils/classList'
import {Button} from 'react-bootstrap'

export default ({children,...props})=>{
    const theme =  useTheme();
    const classes = useStyles({...props,theme})
    //console.log(classes)

    return <div className={cl(
        classes.appbar,
        'row'
    )}>
        <div className='col-sm-3'></div>
        <div className='col-sm-9' style={{padding:0,margin:0}}>
        <a><AccountCircle/></a>
        <a><NotificationsIcon/></a>
        <a className={classes.active}><Button variant="outline-primary" style={{border:'none'}}>+ Add</Button></a>
        <a style={{float:'left',paddingLeft:0}}><MenuIcon/></a>
        <div className={classes.searchContainer}>
        <form>
            <input type='text' name='search' id='search' placeholder='search..'/>
            <button type='submit' value='search'><SearchIcon/></button>
        </form>
        </div>
        </div>
      
    </div>
}