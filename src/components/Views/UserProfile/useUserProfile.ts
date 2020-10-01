import * as React from 'react';
import useStyles from './UserProfile.styles';
import { Typography, Link, Button, CircularProgress } from '@material-ui/core';
import { useHistory, RouteComponentProps, useParams } from 'react-router-dom';
import { IUserDetails } from '../../../model/model';
import { getGithubUser } from '../../../api/methods/FetchApi';

interface IUserProfileRouteParams {
  username?: string;
}

export const useUserProfile = () => {
  let history = useHistory();
  const [user, setUser] = React.useState<IUserDetails>();
  const title = 'User Profile Page';
  const publicRepos = user?.public_repos === 0;

  const params: IUserProfileRouteParams = useParams();
  React.useEffect(() => {
    const getUserDetails = async () => {
      if (params.username) {
        const data = await getGithubUser(params.username);
        setUser(data);
      }
    };
    getUserDetails();
  }, []);

  const handleButtonClick = React.useCallback(() => {
    history.goBack();
  }, [history]);
  return { user, title, publicRepos, handleButtonClick };
};
