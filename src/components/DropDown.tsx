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
    placeholder: string,
    options: {label: string, value: string}[],
    value: string,
    onChange: (value: string) => void
}

const DropDown = ({placeholder, options, onChange, value}: IDropDownProps) => {
    const classes = useStyles();
  
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
      onChange(event.target.value as string);
    };
    
    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel >{placeholder}</InputLabel>
        <Select
          value={value || ''}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          {options.map((option, index) => (
            <MenuItem key={`${option.value} ${index}`} value={option.value}>{option.label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    )
  }

export default DropDown;