import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listWrapper: {
      width: '100%',
      height: '100%',
      overflowY: 'auto',
      '&::-webkit-scrollbar': {
        width: 12,
        [theme.breakpoints.down('sm')]: {
          width: 6,
        },
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
        padding: 0,
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme.customPalette.lightGreen,
        borderRadius: 0,
      },
    },
    listWrapperBody: {
      display: 'block',
      margin: '0 auto',
      maxWidth: 900,
      padding: 30,
      [theme.breakpoints.down('sm')]: {
        padding: 20,
      },
    },
    spinnerWrapper: {
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
)

export default useStyles
