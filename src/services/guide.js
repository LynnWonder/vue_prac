import { instance as request } from '@/utils/request'

export async function getGuideInfo() {
  return request.get('/guide')
}

export async function putGuideInfo(guideInfo) {
  return request.post('/guide', guideInfo)
}
