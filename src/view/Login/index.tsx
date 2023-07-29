import classnames from 'classnames'
import styles from './style.less'
import { Props } from './interface'
import { useSelector } from 'react-redux'
import { useUnmount } from 'ahooks'
import {
  unmount,
  initPage,
} from './flow/action'
import Loading from '@/component/Loading'
import UserInfo from './containers/UserInfo'

const Login: FC<Props> = memo(() => {
  useUnmount(unmount)
  const loading = useSelector(state => state.login.loading)

  useEffect(() => {
    initPage()
  }, [])

  return (
    <>
      <UserInfo />
      <Loading show={loading} />
    </>
  )
})

export default Login
