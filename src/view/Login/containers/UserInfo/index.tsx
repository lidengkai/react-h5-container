import classnames from 'classnames'
import styles from './style.less'
import { ContainerUserInfo } from '../../interface'
import {
  submit,
} from '../../flow/action'
import { Button, Dialog, Form, Input } from 'antd-mobile'

const UserInfo: FC<ContainerUserInfo.Props> = memo(() => {
  const [form] = Form.useForm<ContainerUserInfo.FormType>()

  const initialValues = useMemo<ContainerUserInfo.FormType>(() => {
    return {
      username: '',
      password: ''
    }
  }, [])

  return (
    <>
      <Dialog visible
        content={
          <Form layout="horizontal"
            form={form}
            initialValues={initialValues}
            onFinish={submit}
            footer={
              <Button block type="submit" color="primary">登录</Button>
            }
          >
            <Form.Item name="username" label="用户名"
              rules={[{ required: true, message: '用户名不能为空' }]}
            >
              <Input type="text" placeholder="请输入用户名" autoComplete="off" />
            </Form.Item>
            <Form.Item name="password" label="密码"
              rules={[{ required: true, message: '密码不能为空' }]}
            >
              <Input type="password" placeholder="请输入密码" />
            </Form.Item>
          </Form>
        }
      />
    </>
  )
})

export default UserInfo
