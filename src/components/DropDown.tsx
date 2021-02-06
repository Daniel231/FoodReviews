import { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
    //   margin: theme.spacing(1),
      minWidth: 160,
    },
    selectEmpty: {
    //   marginTop: theme.spacing(2),
    },
  }),
);

interface IDropDownProps {
    placeholder: string
}

const DropDown = ({placeholder}: IDropDownProps) => {
    const classes = useStyles();
    const [age, setAge] = useState('');
  
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      setAge(event.target.value as string);
    };
    
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel >{placeholder}</InputLabel>
        <Select
          value={age}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    )
  }

export default DropDown;