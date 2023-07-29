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
import Menus from './containers/Menus'

const Home: FC<Props> = memo(() => {
  useUnmount(unmount)
  const loading = useSelector(state => state.home.loading)

  useEffect(() => {
    initPage()
  }, [])

  return (
    <>
      <Menus />
      <Loading show={loading} />
    </>
  )
})

export default Home
