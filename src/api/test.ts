import {
  get,
  post
} from './index'

export function getInfo(): Promise<any>{
  return get('/one')
}