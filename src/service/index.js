import service from '../utils/request'

export const getDefaultTemp = (params) => {
  return service({
    url: `/v1/seed/projects/template/getDefaultTemp`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: params,
  })
}
