import * as React from 'react'
import UserListElement from './UserListElement'
import MainSection from '../../BaseComponents/MainSection'
import useStyles from './UserListElement.styles'
import CustomCircularProgress from '../../BaseComponents/CustomCircularProgress'
import { useUserList } from './useUserList'

const UserList: React.FC = () => {
  const classes = useStyles()
  const { loadingPage, handleScrollEvent, gitHubUsers, handleButtonClick, loadingUsers } = useUserList()
  const title = 'GitHub Application'

  return (
    <MainSection className={classes.listWrapper} title={title}>
      {!loadingPage ? (
        <div onScroll={handleScrollEvent} className={classes.listWrapper}>
          <div className={classes.listWrapperBody}>
            {gitHubUsers?.map(({ login, id, avatar_url }) => (
              <UserListElement
                handleClick={() => handleButtonClick(login)}
                key={id}
                login={login}
                avatarUrl={avatar_url}
              />
            ))}
            {loadingUsers && <CustomCircularProgress />}
          </div>
        </div>
      ) : (
        <div className={classes.spinnerWrapper}>
          <CustomCircularProgress />
        </div>
      )}
    </MainSection>
  )
}

export default UserList
