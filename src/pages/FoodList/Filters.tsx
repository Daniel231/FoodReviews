import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import GradeOutlined from '@material-ui/icons/GradeOutlined';
import FastfoodRounded from '@material-ui/icons/FastfoodRounded';

import DropDown from '../../components/DropDown'
import SearchBox from '../../components/SearchBox'
import { useDispatch, useSelector } from 'react-redux';
import { setReviewsFilters } from '../../store/actions/reviews-list-actions';
import { IRootState } from '../../interfaces';

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
    const dispatch = useDispatch();
    const score = useSelector((state: IRootState) => state.ReviewsList.score);
    
    const dropDownScoreOptions = [
      {value: '1',label: "One"},
      {value: '2',label: "Two"},
      {value: '3',label: "Three"},
      {value: '4',label: "Four"},
      {value: '5',label: "Five"}
    ]

    const handleChange = (type: string) => (value: string) => {
      dispatch(setReviewsFilters(type, value));
    }

    return (
        <Grid container spacing={2} className={classes.filtersContainer}>
          <Grid item>
            <IconButton className={classes.iconContainer}>
              <GradeOutlined />
            </IconButton>
            <DropDown placeholder="Filter by score" options={dropDownScoreOptions} onChange={handleChange('score')} value={score} />
          </Grid>
          <Grid item>
            <Grid container>
              <Grid item>
                <IconButton className={classes.iconContainer}>
                  <FastfoodRounded />
                </IconButton>
              </Grid>
              <Grid item>
                <SearchBox placeholder="Product" onChange={handleChange('productId')} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    )
}

export default Filters;