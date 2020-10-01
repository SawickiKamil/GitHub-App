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
        <>
          <div onScroll={handleScrollEvent} className={classes.listWrapper}>
            <div className={classes.listWrapperBody}>
              {gitHubUsers?.map((item) => (
                <UserListElement
                  handleClick={() => handleButtonClick(item.login)}
                  key={item.id}
                  login={item.login}
                  avatarUrl={item.avatar_url}
                />
              ))}
              {loadingUsers && <CustomCircularProgress />}
            </div>
          </div>
        </>
      ) : (
        <div className={classes.spinnerWrapper}>
          <CustomCircularProgress />
        </div>
      )}
    </MainSection>
  )
}

export default UserList
