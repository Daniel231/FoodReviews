import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { debounce } from '../../utils';
import Table from '../../components/Table'
import ReviewDialog from './ReviewDialog';
import Filters from './Filters'
import { fetchReviewById, fetchReviews, openReviewDialog, setPage } from '../../store/actions/reviews-list-actions';
import { IRootState } from '../../interfaces';

const debounceWrapper = debounce();

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
  const dispatch = useDispatch();

  const reviewsList = useSelector((state: IRootState) => state.ReviewsList.reviews);
  const reviewsListLoading = useSelector((state: IRootState) => state.ReviewsList.reviewsLoading);
  const reviewsTablePage = useSelector((state: IRootState) => state.ReviewsList.reviewsTablePage);
  const reviewsTablePaginationAmount = useSelector((state: IRootState) => state.ReviewsList.reviewsTablePaginationAmount);
  const reviewsTableTotalPages = useSelector((state: IRootState) => state.ReviewsList.reviewsTableTotalPages);
  const score = useSelector((state: IRootState) => state.ReviewsList.score);
  const productId = useSelector((state: IRootState) => state.ReviewsList.productId);

  const tableColumns = [
    {id: 'id',label:'id'},
    {id: 'productId',label:'Product Id'},
    {id: 'profileName',label:'Reviewer'},
    {id: 'score',label:'Score'},
    {id: 'summary',label:'Summary'}
  ];

  useEffect(() => {
    debounceWrapper(() => dispatch(fetchReviews(reviewsTablePage, reviewsTablePaginationAmount, score, productId)), 200);
  }, [reviewsTablePage, reviewsTablePaginationAmount, score, productId, dispatch]);

  const openDialog = (reviewId: string) => {
    dispatch(fetchReviewById(reviewId));
    dispatch(openReviewDialog());
  }

  const changeTablePage = (newPage: number) => {
    dispatch(setPage(newPage));
  }

  return (
    <Grid container direction="column" className={classes.container}>
      <ReviewDialog />
      <Grid item>
        <Filters />
      </Grid>
      <Grid item>
        <Table columns={tableColumns}
              rows={reviewsList}
              loading={reviewsListLoading}
              rowsPerPage={reviewsTablePaginationAmount}
              totalRows={reviewsTableTotalPages}
              page={reviewsTablePage}
              onCustomActionClick={openDialog}
              handleChangePage={changeTablePage}
        />
      </Grid>
    </Grid>
  )
}

export default FoodList;