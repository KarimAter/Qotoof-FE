import { useSelector } from 'react-redux';
import { authSelector } from '../redux/authSlice';
import { IUser } from '../utils/interfaces';

function Home() {
  const user = useSelector(authSelector) as IUser;
  return <div className="flex w-full flex-col p-2">{user.email}</div>;
}

export default Home;
