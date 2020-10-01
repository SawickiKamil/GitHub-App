import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainWrapper: {
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: theme.customPalette.graphiteBlack,
      height: '100vh',
      width: '100%',
    },
    headerWrapper: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      width: '100%',
      flex: '0 0 40px',
    },
    footerWrapper: {
      display: 'flex',
      flex: '0 0 40px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(30,30,30,.95)',
    },
    footerLinkStyle: {
      color: theme.customPalette.white,
      fontSize: 14,
      [theme.breakpoints.down('sm')]: {
        fontSize: 11,
      },
    },
    titleStyle: {
      display: 'flex',
      width: '100%',
      height: '90px',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(30,30,30,.95)',
      [theme.breakpoints.down('sm')]: {
        fontSize: 30,
        height: '80px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 20,
        height: '60px',
      },
    },
    sectionWrapper: {
      flex: '1 1 auto',
      overflow: 'hidden',
    },
  })
)

export default useStyles
