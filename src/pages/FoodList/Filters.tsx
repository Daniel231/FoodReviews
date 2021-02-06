import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GradeOutlined from '@material-ui/icons/GradeOutlined';
import FastfoodRounded from '@material-ui/icons/FastfoodRounded';

import DropDown from '../../components/DropDown'
import SearchBox from '../../components/SearchBox'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    filtersContainer: {
      margin: theme.spacing(1),
    },
    iconContainer: {
      backgroundColor: '#E9ECEF',
      border: '1px solid rgba(0, 0, 0, 0.23)',
      borderRadius: 5,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
      width: 56,
      height: 56,
    }
  }),
);

const Filters = () => {
    const classes = useStyles();

    return (
        <Grid container spacing={2} className={classes.filtersContainer}>
          <Grid item>
            <IconButton className={classes.iconContainer}>
              <GradeOutlined />
            </IconButton>
            <DropDown placeholder="Filter by score" />
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <IconButton className={classes.iconContainer}>
                  <FastfoodRounded />
                </IconButton>
              </Grid>
              <Grid item>
                <SearchBox placeholder="Product" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
}

export default Filters;