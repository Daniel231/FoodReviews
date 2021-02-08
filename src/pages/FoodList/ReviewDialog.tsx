import { useDispatch, useSelector } from 'react-redux';
import { createStyles, Theme, withStyles, WithStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

import RatingStars from '../../components/RatingStars';
import { closeReviewDialog } from '../../store/actions/reviews-list-actions';
import { IRootState } from '../../interfaces';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    }
  });

export interface DialogTitleProps extends WithStyles<typeof styles> {
  id: string;
  children: React.ReactNode;
  onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    fieldContainer: {
      padding: theme.spacing(1),
    },
    fieldName: {
      fontWeight: 'bold'
    },
    closeButton: {
      color: 'white',
      borderRadius: 5,
      backgroundColor: 'rgb(108,117,125)',
    }
  })
);

const ReviewDialog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const currentReview = useSelector((state: IRootState) => state.ReviewsList.currentReview);
  const isReviewDialogOpen = useSelector((state: IRootState) => state.ReviewsList.isDialogOpen);
  const dialogLoading = useSelector((state: IRootState) => state.ReviewsList.dialogLoading);
  const ratingRatio = 5;

  const handleClose = () => {
    dispatch(closeReviewDialog());
  };

  return (
    <Dialog onClose={handleClose} open={isReviewDialogOpen}>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        <span className={classes.fieldName}>Review:</span> {currentReview?.summary}
      </DialogTitle>
      <DialogContent dividers>
        {dialogLoading ? 
          <Grid
            container
            justify="center"
            alignItems="center"
          >
            <CircularProgress size={60} />
          </Grid>
        :
          <>
            <Typography component={'div'} className={classes.fieldContainer}>
              <span className={classes.fieldName}>Id:</span> {currentReview?.id}
            </Typography>
            <Divider />
            <Typography component={'div'} className={classes.fieldContainer}>
              <span className={classes.fieldName}>Product Id:</span> {currentReview?.productId}
            </Typography>
            <Divider />
            <Typography component={'div'} className={classes.fieldContainer}>
              <span className={classes.fieldName}>Reviewer:</span> {currentReview?.profileName}
            </Typography>
            <Divider />
            <Typography component={'div'} className={classes.fieldContainer}>
              <span className={classes.fieldName}>Likes:</span> {currentReview?.helpfulnessNumerator}
            </Typography>
            <Divider />
            <Typography component={'div'} className={classes.fieldContainer}>
              <span className={classes.fieldName}>Dislike:</span> {currentReview?.helpfulnessDenominator}
            </Typography>
            <Divider />
            <Typography component={'div'} className={classes.fieldContainer}>
              <Grid container spacing={1} >
                <Grid item>
                  <span className={classes.fieldName}>Score:</span>
                </Grid>
                <Grid item>
                  <RatingStars score={currentReview?.score} ratingRatio={ratingRatio} />
                </Grid>
              </Grid>
            </Typography>
            <Divider />
            <Typography component={'div'} className={classes.fieldContainer}>
              <span className={classes.fieldName}>Review:</span> {currentReview?.text}
            </Typography>
          </>
        }
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={handleClose} color="primary" className={classes.closeButton}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ReviewDialog;