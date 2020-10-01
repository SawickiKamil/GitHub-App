import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    circularSpinnerRoot: {
      display: 'block',
      margin: '0 auto',
      height: '70 !important',
      width: '70 !important',
      color: theme.customPalette.lightOrange,
      [theme.breakpoints.down('sm')]: {
        height: '40 !important',
        width: '40 !important',
      },
    },
  })
)

export default useStyles
