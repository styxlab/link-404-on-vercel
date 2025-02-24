import { Outlet, useLoaderData } from '@remix-run/react'

export const config = { runtime: 'edge' }

export default function Layout() {
  return (
      <Outlet />
  )
}
