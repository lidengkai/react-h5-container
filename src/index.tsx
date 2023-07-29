import { createRoot } from 'react-dom/client'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd-mobile'
import zhCN from 'antd-mobile/es/locales/zh-CN'
import history from '@/history'
import App from '@/view/App'
import vconsole from 'vconsole'
import './index.less'

console.log('%c当前环境:' + process.env.NODE_ENV, 'background-color: yellow;', {
  $APP_MODE: $APP_MODE,
  $APP_ENV: $APP_ENV,
})

const render = (dom: HTMLElement) => {
  createRoot(dom).render(
    <ConfigProvider locale={zhCN}>
      <HistoryRouter history={history as any}>
        <App />
      </HistoryRouter>
    </ConfigProvider>
  )
}

if (process.env.NODE_ENV === 'production' && $APP_ENV !== 'prod') {
  new vconsole()
}

render(document.getElementById('h5-container')!)
