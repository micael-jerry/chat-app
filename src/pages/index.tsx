import { useSession } from "next-auth/react"

export default function Home() {
  const { data } = useSession()
  return (
    <>
      <h1>HOME page</h1>
      <h1>{JSON.stringify(data?.user)}</h1>
    </>
  )
}
