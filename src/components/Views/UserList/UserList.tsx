import * as React from 'react';
import UserListElement from './UserListElement';
import MainSection from '../BaseComponents/MainSection';
import useStyles from './UserListElement.styles';
import { CircularProgress } from '@material-ui/core';
import { useUserList } from './useUserList';

const UserList = () => {
  const classes = useStyles();
  const {
    title,
    loading,
    handleScrollEvent,
    gitHubUsers,
    handleButtonClick,
  } = useUserList();

  return (
    <MainSection className={classes.listWrapper} title={title}>
      {loading ? (
        <div onScroll={handleScrollEvent} className={classes.listWrapper}>
          {gitHubUsers?.map((item) => (
            <UserListElement
              handleClick={() => handleButtonClick(item.login)}
              key={item.id}
              login={item.login}
              avatarUrl={item.avatar_url}
            />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </MainSection>
  );
};

export default UserList;
