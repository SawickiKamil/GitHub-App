import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainWrapper: {
      display: 'flex',
      backgroundColor: theme.customPalette.lightTuna,
      padding: '10px 30px 40px',
      marginBottom: 15,
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box',
      [theme.breakpoints.down('xs')]: {
        padding: 10,
      },
    },
    bodyWrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    avatarStyle: {
      height: '25%',
      width: '25%',
      minHeight: 120,
      minWidth: 120,
      borderRadius: '50%',
      border: `solid 4px ${theme.customPalette.lightOrange}`,
      justifyContent: 'space-between',
      boxShadow: '0 16px 27px -10px rgba(0, 0, 0, 0.79), 0 0 24px 0 rgba(255, 180, 141, 0.23)',
      [theme.breakpoints.down('xs')]: {
        border: `solid 2px ${theme.customPalette.lightOrange}`,
        minHeight: 90,
        minWidth: 90,
      },
    },
    loginStyle: {
      color: theme.customPalette.lightGreen,
      fontSize: 30,
      fontWeight: 900,
      marginTop: 10,
      marginLeft: '7%',
      textTransform: 'capitalize',
      [theme.breakpoints.down('sm')]: {
        fontSize: 22,
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: 0,
        fontSize: 20,
      },
    },
  })
)

export default useStyles
