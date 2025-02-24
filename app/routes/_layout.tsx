import { Outlet, useLoaderData } from '@remix-run/react'

export const config = { runtime: 'edge' }

export const loader = async () => {
  return null
}

export default function Layout() {
  //const { partner } = useLoaderData<typeof loader>()
  //console.log('partner', partner)

  return (
      <Outlet />
  )
}
