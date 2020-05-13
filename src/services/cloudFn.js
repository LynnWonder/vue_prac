import { instance as request } from '@/utils/firebase'

export async function getCloudInfo() {
  const data = request.get('/')
  console.info(data)
  return data
}
