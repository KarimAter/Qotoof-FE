import { useDispatch, useSelector } from 'react-redux';
import Button from '../components/Button';
import { authSelector } from '../redux/authSlice';
import { AppDispatch } from '../redux/store';
import { changeTheme, themeSelector } from '../redux/themeSlice';

// Todo: move useSelector(theme) to seperate component to avoid rerenders

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector(authSelector);
  const { theme } = useSelector(themeSelector);
  return (
    <div className="flex w-full flex-col p-2">
      <h2>{`Hello ${user.name}`}</h2>
      <Button
        text={theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        type="button"
        handleClick={() =>
          dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'))
        }
      />
    </div>
  );
}

export default Home;
