import { createStyles, makeStyles, withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Search from '@material-ui/icons/Search';

const useStyles = makeStyles(() =>
  createStyles({
    iconContainer: {
      backgroundColor: '#E9ECEF',
      border: '1px solid rgba(0, 0, 0, 0.23)',
      borderRadius: 5,
      borderBottomLeftRadius: 0,
      borderTopLeftRadius: 0,
      width: 56,
      height: 56,
    }
  }),
);

interface ISearchBoxProps {
    placeholder: string
}

const CustomTextField = withStyles({
    root: {
      '& .MuiOutlinedInput-root': {
          borderRadius: 0
      },
    },
  })(TextField);

const SearchBox = ({placeholder}:ISearchBoxProps) => {
  const classes = useStyles();

  return (
      <Grid container>
        <Grid item>
            <CustomTextField label={placeholder} variant="outlined"/>
        </Grid>
        <Grid item>
            <IconButton className={classes.iconContainer}>
                <Search />
            </IconButton>
        </Grid>
      </Grid>
  );
}

export default SearchBox;