import Grid from '@material-ui/core/Grid'
import GradeOutlined from '@material-ui/icons/GradeOutlined';
import StarOutlined from '@material-ui/icons/StarOutlined';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    ratingStar: {
      color: 'orange',
    },
  }),
);

interface IRatingsStars {
    score: number,
    ratingRatio: number
}

const RatingsStars = ({score, ratingRatio}: IRatingsStars) => {
    const classes = useStyles();
    const starsAmount = new Array(ratingRatio).fill(0);

    return (
        <Grid container>
            {
                starsAmount.map((cell, index) => (
                    <Grid item>
                        {
                            index < score ? 
                                <StarOutlined className={classes.ratingStar} />
                            :
                                <GradeOutlined className={classes.ratingStar} />
                        }
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default RatingsStars;