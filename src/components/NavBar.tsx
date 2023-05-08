import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export const NavBar: React.FC = () => {
    const { data } = useSession()
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <Link href={"/"} className='navbar-brand'>NavBar</Link>
                    {
                        (data?.user !== undefined) && (
                            <div className="d-flex">
                                <div>
                                    <button className="btn btn-outline-success">{data?.user?.name}</button>
                                </div>
                                <div>
                                    <button className="btn btn-outline-success" onClick={() => signOut()}>SignOut</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>
        </>
    )
}
