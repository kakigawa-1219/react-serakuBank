import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import '../../css/index.css'

const useStyles = makeStyles({
    "button": {
        backgroundColor: '#202d74',
        color: '#ffffff',
        height:50,
        fontSize:12,
        width:'100%',
        marginTop:6,
        marginBottom:6
    }
    
})
const TransitionButton = (props) => {
    const classes = useStyles();
    return (
             <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
                {props.label}
            </Button>
       
        
       
    )
}

export default TransitionButton

