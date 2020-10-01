import makeStyles from '@material-ui/styles/makeStyles'
import createStyles from '@material-ui/styles/createStyles'
import { Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listWrapper: {
      overflowY: 'auto',
      maxHeight: '75vh',
      paddingButton: 25,
      '&::-webkit-scrollbar': {
        width: 13,
        marginLeft: 10,
      },
      '&::-webkit-scrollbar-track': {
        backgroundColor: theme.customPalette.orangeOnHover,
        padding: 0,
      },
      '&::-webkit-scrollbar-thumb': {
        background: theme.customPalette.lightGreen,
        borderRadius: 0,
      },
    },
  })
)

export default useStyles
