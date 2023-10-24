
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../Context/AuthContext';
import styles from './Dashboard.module.css';

const Dashboard = () => {

  const { user } = useAuthValue();

  const navigate = useNavigate()

  return (
    <div>
      {!user && navigate("/")}
        <h1>DashBoard</h1>
    </div>
  )
}

export default Dashboard