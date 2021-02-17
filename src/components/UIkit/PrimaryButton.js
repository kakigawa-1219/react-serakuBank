import React from 'react';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/styles';
import '../../css/index.css'

const useStyles = makeStyles({
    "button": {
        backgroundColor: '#202d74',
        color: '#ffffff',
        marginLeft: '25%',
        marginTop: 30,
        width: '50%',
        height:50,
        fontSize:18
    }
})
const PrimaryButton = (props) => {
    const classes = useStyles();
    return (
             <Button className={classes.button} variant="contained" onClick={() => props.onClick()}>
                {props.label}
            </Button>
       
        
       
    )
}

export default PrimaryButton

