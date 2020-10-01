import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    visitButtonStyle: {
      display: 'flex',
      minWidth: 300,
      height: 70,
      boxShadow: '0 16px 27px -10px rgba(0, 0, 0, 0.79), 0 0 24px 0 rgba(255, 180, 141, 0.23)',
      '&:hover': {
        backgroundColor: theme.customPalette.orangeOnHover,
      },
      '&:active': {
        boxShadow: 'none',
        transition: 'all .1s ease',
      },
      [theme.breakpoints.down('sm')]: {
        minWidth: 200,
        height: 60,
        fontSize: 16,
      },
      [theme.breakpoints.down('xs')]: {
        minWidth: 120,
        height: 40,
        fontSize: 14,
      },
    },
  })
)

export default useStyles
