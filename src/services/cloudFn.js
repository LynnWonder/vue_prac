import { instance as request } from '@/utils/firebase'

export async function getCloudInfo() {
  return request.get('/')
}
