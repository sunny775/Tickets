import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    root:{
        background:'#2196F3',
        height:200,
        color:'white',
        padding:15,
        position:'relative'
    },
    bars:{
        background:'white',
        boxShadow:'1px 1px 3px 3px rgba(182, 182, 182,0.2)',
        width:'90%',
        margin:'auto',
        borderRadius:10,
        position:'absolute',
        top:100,
        left:'5%'
    }
})
export default useStyles;