import classnames from 'classnames'
import styles from './style.less'
import { ContainerMenus } from '../../interface'
import {
  clickItem,
} from '../../flow/action'
import { NoticeBar } from 'antd-mobile'
import { AppstoreOutline, LinkOutline, SetOutline } from 'antd-mobile-icons'
import { ROUTE } from '@/lib/config'

const Menus: FC<ContainerMenus.Props> = memo(() => {
  const config = useMemo(() => {
    return [
      {
        title: '子应用',
        icon: <AppstoreOutline />,
        pathname: ROUTE.PROJECT,
      },
      {
        title: '设置',
        icon: <SetOutline />,
        pathname: '',
      },
    ]
  }, [])

  return (
    <>
      <NoticeBar content="应用" icon={<LinkOutline />} />
      <div className={styles.root}>
        {
          config.map((item, index) => {
            const { title, icon, pathname } = item
            return (
              <div key={index} className={styles.item} onClick={() => clickItem(pathname)}>
                <div className={styles.content}>
                  <div className={styles.icon}>{icon}</div>
                  <div className={styles.text}>{title}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
})

export default Menus
