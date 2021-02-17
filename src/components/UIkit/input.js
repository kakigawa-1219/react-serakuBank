import React from 'react';
import TextFiled from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({
    "input": {
        marginLeft: '25%',
        marginBottom: 16,
        width: '50%'
    }
})
const Input = (props) => {
    const classes = useStyles();
    return (
        <TextFiled
            className={classes.input}
            fullWidth={props.fullWidth}
            label={props.label}
            margin="dense"
            multiline={props.multiline}
            required={props.required}
            rows={props.rows}
            value={props.value}
            type={props.type}
            onChange={props.onChange}

        />
    )
}

export default Input