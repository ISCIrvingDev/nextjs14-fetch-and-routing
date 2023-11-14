import UserComponent from './components/UserComponent';
import styles from './page.module.css'
import { AppServ } from './services/app.service'

export default async function IndexPage() {
  const users = await AppServ.getUsers();

  return (
    <div>
      <h1>IndexPage</h1>

      <UserComponent users={users} />
    </div>
  )
}
