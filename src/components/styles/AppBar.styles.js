import {createUseStyles} from 'react-jss'


const useStyles = createUseStyles({
    appbar:{
        overflow: 'hidden',
        boxShadow:'1px 1px 3px 3px rgba(182, 182, 182,0.15)',
        zIndex:2,
        backgroundColor: props=> props.bg,
        '& a':{
            float:'right',
            boxSizing:'border-box',
            height:'40px',
            display:'block',
            textAlign:'center',
            padding:'6px 12px',
            textDecoration:'none',
            fontSize:17,
            '&:hover':{
                background:'#2196F3',
                color:'white',
                cursor:'pointer'
            }
        }
    },
    searchContainer:{
        float:'left',
        textAlign:'center',
        marginTop:6,
        marginLeft:20,
        '& input':{
            padding:'0px 6px',
            border:'1px solid rgba(182, 182, 182,0.3)',
        },
        '& button':{
            float: 'right',
            height:'26px',
            marginRight: '16px',
            background: ({theme})=>theme.searchbtn,
            fontSize: '17px',
            border: 'none',
            cursor: 'pointer',
            color:'white'
        }
    },
    active:{
        borderBottom:'2px solid orange'
    }
})
export default useStyles
