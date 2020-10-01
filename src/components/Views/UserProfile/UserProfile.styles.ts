import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      overflowY: 'auto',
    },
    contentWrapper: {
      maxWidth: 900,
      padding: 30,
      [theme.breakpoints.down('sm')]: {
        padding: 20,
      },
    },
    userDetailsWrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      margin: '0 auto',
    },
    avatarStyle: {
      width: 100,
      height: 100,
      borderRadius: '50%',
      border: `solid 2px ${theme.customPalette.lightOrange}`,
      marginRight: 20,
      boxShadow: '0 16px 27px -10px rgba(0, 0, 0, 0.79), 0 0 24px 0 rgba(255, 180, 141, 0.23)',
      [theme.breakpoints.up('sm')]: {
        border: `solid 4px ${theme.customPalette.lightOrange}`,
        width: 150,
        height: 150,
        marginRight: 60,
      },
    },
    nameStyle: {
      marginBottom: 10,
      fontSize: 15,
      letterSpacing: 1.5,
      fontWeight: 'bold',
      color: theme.customPalette.white,
      [theme.breakpoints.up('sm')]: {
        fontSize: 20,
        letterSpacing: 2,
        marginBottom: 15,
      },
    },
    linkButtonStyle: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
      width: '100%',
      height: 70,
      borderRadius: 3,
      border: `solid 2px ${theme.customPalette.lightOrange}`,
      boxShadow: '0 16px 27px -10px rgba(0, 0, 0, 0.79), 0 0 24px 0 rgba(255, 180, 141, 0.23)',
      backgroundColor: 'transparent',
      textTransform: 'capitalize',
      marginBottom: 20,
      color: theme.customPalette.lightOrange,
      fontSize: 18,
      [theme.breakpoints.up('sm')]: {
        width: 450,
        height: 80,
        marginBottom: 30,
      },
      '&:hover': {
        opacity: 0.8,
        textDecoration: 'none',
        transition: 'all .4s ease',
      },
    },
    backwardsButtonStyle: {
      width: '100%',
      height: 50,
      borderRadius: 0,
      boxShadow: 'none',
      backgroundColor: 'transparent',
      marginTop: 30,
      fontSize: 16,
      fontWeight: 900,
      letterSpacing: 3.5,
      opacity: 0.2,
      color: theme.customPalette.white,
      textTransform: 'uppercase',
      [theme.breakpoints.up('sm')]: {
        width: 450,
      },
      '&:hover': {
        opacity: 0.3,
      },
    },
    amountOfRepositoriesStyle: {
      fontSize: 13,
      letterSpacing: 1.2,
      color: theme.customPalette.white,
      [theme.breakpoints.up('sm')]: {
        fontSize: 15,
      },
    },
    userAccountStyle: {
      fontSize: 15,
      letterSpacing: 1.5,
      marginBottom: 3,
      color: theme.customPalette.white,
      [theme.breakpoints.up('sm')]: {
        fontSize: 17,
      },
    },
    buttonWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  })
)

export default useStyles
