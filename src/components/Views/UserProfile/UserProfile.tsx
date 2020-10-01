import * as React from 'react';
import useStyles from './UserProfile.styles';
import { Typography, Link, Button, CircularProgress } from '@material-ui/core';
import MainSection from '../BaseComponents/MainSection';
import { useUserProfile } from './useUserProfile';

export const UserProfile = () => {
  const classes = useStyles();

  const { user, title, publicRepos, handleButtonClick } = useUserProfile();

  if (!user) {
    return <CircularProgress />;
  }

  return (
    <MainSection title={title}>
      <div className={classes.userDetailsWrapper}>
        <img
          className={classes.avatarStyle}
          src={user.avatar_url}
          alt={user.name}
        />
        <div>
          <Typography className={classes.nameStyle}>
            {' '}
            Hi my name is {user.name}
          </Typography>
          <Typography className={classes.userAccountStyle}>
            Follow my account - {user.login}
          </Typography>
          <Typography className={classes.amountOfRepositoriesStyle}>
            {publicRepos
              ? 'Opsss... I have no public repositories'
              : `On my GitHub you can find ${user.public_repos} repositories`}
          </Typography>
        </div>
      </div>
      <Link
        className={classes.linkButtonStyle}
        target="_blank"
        href={user.html_url}
      >
        Visit my GitHub account
      </Link>
      <Button
        onClick={handleButtonClick}
        className={classes.backwardsButtonStyle}
      >
        Step Backwards
      </Button>
    </MainSection>
  );
};

export default UserProfile;
