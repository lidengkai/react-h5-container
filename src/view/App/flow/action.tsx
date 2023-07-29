import { Store } from '../interface'
import { dispatch, resetState } from '@/store'
import reducer from './reducer'
import history from '@/history'
import message from '@/component/Message'
import userInfoApi from '@/api/user/Info'

const {
  init,
  commit,
} = reducer.actions

export const unmount = async () => {
  resetState()
}

export const initPage = async () => {
}

export const getUserInfo = async () => {
  dispatch(commit({ loading: true }))
  const userInfo = await userInfoApi()
  if (userInfo) {
    return dispatch(commit({ loading: false, userInfo }))
  }
  dispatch(commit({ loading: false }))
}
