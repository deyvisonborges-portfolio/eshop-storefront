const baseUrlAuthorizer = process.env.NEXT_PUBLIC_APP_API_AUTHORIZER
const baseUrlPortal = process.env.NEXT_PUBLIC_APP_API_PORTAL

export const endpoints = {
  remote: {
    v1: {
      authorizer: baseUrlAuthorizer,
      portal: baseUrlPortal
    },
    v2: {
      Zendesk: `https://noverde.zendesk.com/api/v2/help_center`
    }
  }
}
