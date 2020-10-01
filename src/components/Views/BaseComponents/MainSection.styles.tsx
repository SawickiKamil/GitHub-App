import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: theme.customPalette.graphiteBlack,
      minHeight: '100vh',
      width: '100%',
      position: 'relative',
      overflowY: 'auto',
    },
    bodyStyle: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      padding: '30px 20px',
      [theme.breakpoints.down('xs')]: {
        padding: '15px 0',
      },
    },
    footerTextStyle: {
      position: 'absolute',
      bottom: 20,
      right: 30,
      [theme.breakpoints.up('sm')]: {
        bottom: 30,
        right: 50,
      },
    },
    footerLinkStyle: {
      color: theme.customPalette.white,
      fontSize: 11,
      [theme.breakpoints.up('sm')]: {
        fontSize: 14,
      },
    },
    titleStyle: {
      marginBottom: 40,
      [theme.breakpoints.down('xs')]: {
        fontSize: 40,
        maxWidth: 300,
        marginBottom: 20,
      },
    },
    progressStyle: {
      width: '100%',
    },
  })
)

export default useStyles
