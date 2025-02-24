import { Outlet } from '@remix-run/react'

export const config = { runtime: 'edge' }

/*
export const loader = async () => {
  return { partner: { name: 'hello world'} }
}
  */

export default function Layout() {
  //const { partner } = useLoaderData<typeof loader>()
  const partner = { name: 'hello world'}

  return (
      <Outlet context={partner} />
  )
}
