import { useState } from 'react';
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
import Grid from '@material-ui/core/Grid'

import RatingStars from '../../components/RatingStars';

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
  const [open, setOpen] = useState(true);
  const classes = useStyles();
  const ratingRatio = 5;

  const handleClose = () => {
    setOpen(false);
  };

  const product = {
    name: 'daniel',
    Id: 5,
    productId: 'aa',
    reviewer: 'daniel',
    likes: 2,
    dislikes: 8,
    score: 3,
    review: ' dhaba'
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Review {product.name}
      </DialogTitle>
      <DialogContent dividers>
        <Typography className={classes.fieldContainer}>
          <span className={classes.fieldName}>Id:</span> {product.Id}
        </Typography>
        <Divider />
        <Typography className={classes.fieldContainer}>
          <span className={classes.fieldName}>Product Id:</span> {product.productId}
        </Typography>
        <Divider />
        <Typography className={classes.fieldContainer}>
          <span className={classes.fieldName}>Reviewer:</span> {product.reviewer}
        </Typography>
        <Divider />
        <Typography className={classes.fieldContainer}>
          <span className={classes.fieldName}>Likes:</span> {product.likes}
        </Typography>
        <Divider />
        <Typography className={classes.fieldContainer}>
          <span className={classes.fieldName}>Dislike:</span> {product.dislikes}
        </Typography>
        <Divider />
        <Typography className={classes.fieldContainer}>
          <Grid container spacing={1} >
            <Grid item>
              <span className={classes.fieldName}>Score:</span>
            </Grid>
            <Grid item>
              <RatingStars score={product.score} ratingRatio={ratingRatio} />
            </Grid>
          </Grid>
        </Typography>
        <Divider />
        <Typography className={classes.fieldContainer}>
          <span className={classes.fieldName}>Review:</span> {product.review}
        </Typography>
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