import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: 'rgb(0,123,255)'
    },
    navigationButtonsContainer: {
      marginLeft: theme.spacing(3)
    },
    navigationButton: {
      color: 'white',
      backgroundColor: 'rgb(108,117,125)'
    },
    link: {
        textDecoration: 'none',
    },
    childrenContainer: {
        padding: 30
    }
  }),
);

interface IMainLayoutProps {
    children: ReactNode
}

const MainLayout = ({children}: IMainLayoutProps) => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h6">
                    Foods Review!
                </Typography>
                <div className={classes.navigationButtonsContainer}>
                    <Link className={classes.link} to="/">
                        <Button className={classes.navigationButton}>
                            Food List
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/Statistics/Reviews">
                        <Button className={classes.navigationButton}>
                            Reviewers statistics
                        </Button>
                    </Link>
                    <Link className={classes.link} to="/Statistics/Food">
                        <Button className={classes.navigationButton}>
                            Food statistics
                        </Button>
                    </Link>
                </div>
            </Toolbar>
            </AppBar>
            <div className={classes.childrenContainer}>
                {children}
            </div>
        </>
    )
}

export default MainLayout;