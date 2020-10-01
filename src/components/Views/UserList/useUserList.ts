import * as React from 'react';
import { getGitHubUsers } from '../../../api/methods/FetchApi';
import { IGitHubUser } from '../../../model/model';
import { useHistory } from 'react-router';

const useUserList = () => {
  const [gitHubUsers, setGitHubUsers] = React.useState<IGitHubUser[]>([]);
  const [loading, setLoading] = React.useState(false);

  const perPage = 10;
  const title = 'GitHub Application';
  let history = useHistory();

  const loadUsers = React.useCallback(async () => {
    const lastId =
      Math.max(...gitHubUsers.map((item) => item.id as number)) ?? 0;
    const data = await getGitHubUsers(
      `https://api.github.com/users?since=${lastId}&per_page=${perPage}&sort=stars&order=desc`
    );
    setInterval(() => {
      setLoading(true);
    }, 800);
    setTimeout;
    setGitHubUsers((prev) => [...prev, ...data]);
  }, [gitHubUsers, setGitHubUsers]);

  const handleButtonClick = React.useCallback(
    (username: string) => {
      history.push(`/user/${username}`);
    },
    [history]
  );

  React.useEffect(() => {
    loadUsers();
  }, []);

  const handleScrollEvent = React.useCallback(
    (event: React.UIEvent<HTMLDivElement>) => {
      const target = event.currentTarget;
      if (target.scrollHeight - target.scrollTop === target.clientHeight) {
        loadUsers();
      }
    },
    [gitHubUsers.length]
  );

  return { title, loading, handleScrollEvent, gitHubUsers, handleButtonClick };
};
