import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles } from '@material-ui/core/styles';

import { debounce } from '../../utils';

import Table from '../../components/Table'
import ReviewDialog from './ReviewDialog';
import Filters from './Filters'
import { getFoodReviews } from '../../services/food';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      border: '2px solid rgb(208, 211,214)',
      borderRadius: 5
    },
  }),
);

const FoodList = () => {
  const classes = useStyles();
  const [foodList, setFoodList] = useState([]);

  const tableColumns = [
    {id: 'Id',label:'id'},
    {id: 'ProductId',label:'Product Id'},
    {id: 'ProfileName',label:'Reviewer'},
    {id: 'Score',label:'Score'},
    {id: 'Summary',label:'Summary'}
  ];

  const fetchFoodList = async () => {
    const reviews = await getFoodReviews();
    setFoodList(reviews);
  };

  useEffect(() => {
    fetchFoodList();
  }, []);

  useEffect(() => {

  })

  return (
    <Grid container direction="column" className={classes.container}>
      <ReviewDialog />
      <Grid item>
        <Filters />
      </Grid>
      <Grid item>
        <Table columns={tableColumns} rows={foodList}/>
      </Grid>
    </Grid>
  )
}

export default FoodList;