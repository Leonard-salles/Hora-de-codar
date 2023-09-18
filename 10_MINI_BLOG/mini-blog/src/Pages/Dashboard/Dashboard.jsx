import { Navigate } from 'react-router-dom';
import { useAuthValue } from '../../Context/AuthContext';
import styles from './Dashboard.module.css';

const Dashboard = () => {

  const { user } = useAuthValue();

  if(!user){
    return <Navigate to="/" />
  }

  return (
    <div>
        <h1>DashBoard</h1>
    </div>
  )
}

export default Dashboard