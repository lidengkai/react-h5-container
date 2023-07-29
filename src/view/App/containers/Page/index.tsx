import classnames from 'classnames'
import styles from './style.less'
import { ContainerPage } from '../../interface'
import { useSelector } from 'react-redux'
import {
  initPage,
} from '../../flow/action'
import { useRoutes } from 'react-router-dom'
import Loading from '@/component/Loading'
import { ROUTE } from '@/lib/config'

const Login = React.lazy(() => import('@/view/Login'))

const Page: FC<ContainerPage.Props> = memo((props) => {
  const loading = useSelector(state => state.app.loading)
  const { defaultElement } = props

  useEffect(() => {
    initPage()
  }, [])

  const node = useRoutes([
    {
      path: ROUTE.LOGIN,
      element: <Login />
    },
    {
      path: '*',
      element: defaultElement
    },
  ])

  return (
    <>
      <React.Suspense fallback={null}>{node}</React.Suspense>
      <Loading show={loading} />
    </>
  )
})

export default Page
