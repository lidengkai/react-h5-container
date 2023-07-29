import classnames from 'classnames'
import styles from './style.less'
import { ContainerLayout } from '../../interface'
import { useSelector } from 'react-redux'
import { useUnmount } from 'ahooks'
import {
  unmount,
  getUserInfo,
} from '../../flow/action'
import { Navigate, useRoutes } from 'react-router-dom'
import { ROUTE } from '@/lib/config'

const Home = React.lazy(() => import('@/view/Home'))
const Project = React.lazy(() => import('remoteProject/app'))

const Layout: FC<ContainerLayout.Props> = memo(() => {
  useUnmount(unmount)
  const userInfo = useSelector(state => state.app.userInfo)

  useEffect(() => {
    getUserInfo()
  }, [])

  const node = useRoutes([
    {
      path: '/home',
      element: <Home />
    },
    {
      path: `${ROUTE.PROJECT}/*`,
      element: <Project userInfo={userInfo} />
    },
    {
      path: '*',
      element: <Navigate to="home" replace />
    },
  ])

  return (
    <>
      {node}
    </>
  )
})

export default Layout
