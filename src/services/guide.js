import { instance as request } from '@/utils/request'

export async function getGuideInfo() {
  const data = await request.get('/guide')
  console.info('data', data)
  return data
}

export async function putGuideInfo(guideInfo) {
  return request.post('/guide', guideInfo)
}
