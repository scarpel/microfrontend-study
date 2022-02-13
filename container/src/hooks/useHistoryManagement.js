import { useHistory } from 'react-router-dom';

export default function useHistoryManagement() {
  const history = useHistory();

  const onNavigate = (nextPathname) => {
    if (history.location.pathname !== nextPathname) {
      history.push(nextPathname);
    }
  };

  return {
    onNavigate,
    history,
  };
}
