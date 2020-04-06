import React from 'react'
import {ListGroup,Badge} from 'react-bootstrap'
import cl from '../../utils/classList'
import useTheme from 'react-jss'
import useStyles from '../styles/SideBar.styles'
export default ()=>{
    const theme =  useTheme();
    const classes = useStyles(theme)
    

    return <div className='col-sm-3' style={{padding:0,paddingRight:20}}>
    <ListGroup variant="flush" className={cl(
        classes.root
    )}>
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item> <h6>In Progress <Badge variant="primary" style={{float:'right'}}>7</Badge></h6></ListGroup.Item>
    <ListGroup.Item> <h6>Wish List <Badge variant="primary" style={{float:'right'}}>12</Badge></h6></ListGroup.Item>
    <ListGroup.Item> <h6>Starred <Badge variant="primary" style={{float:'right'}}>5</Badge></h6></ListGroup.Item>
    <ListGroup.Item> <h6>Completed <Badge variant="primary" style={{float:'right'}}>14</Badge></h6></ListGroup.Item>
    <ListGroup.Item> <h6>Honors/Certificates <Badge variant="primary" style={{float:'right'}}>5</Badge></h6></ListGroup.Item>
  </ListGroup>
  <br/>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item> <h6><Badge pill variant="info" style={{marginRight:20}}>3</Badge> Physics </h6></ListGroup.Item>
    <ListGroup.Item> <h6><Badge pill variant="info" style={{marginRight:20}}>2</Badge> History </h6></ListGroup.Item>
    <ListGroup.Item> <h6><Badge pill variant="info" style={{marginRight:20}}>7</Badge> Computer </h6></ListGroup.Item>
    <ListGroup.Item> <h6><Badge pill variant="info" style={{marginRight:20}}>2</Badge> Geography </h6></ListGroup.Item>
    <ListGroup.Item> <h6><Badge pill variant="info" style={{marginRight:20}}>4</Badge> Maths </h6></ListGroup.Item>
    <ListGroup.Item> <h6><Badge pill variant="info" style={{marginRight:20}}>5</Badge> Biology </h6></ListGroup.Item>
    <ListGroup.Item> <h6><Badge pill variant="info" style={{marginRight:20}}>4</Badge> Graphics </h6></ListGroup.Item>
    <ListGroup.Item> <h6><Badge pill variant="info" style={{marginRight:20}}>2</Badge> Animation </h6></ListGroup.Item>
  </ListGroup>
  </div>
}