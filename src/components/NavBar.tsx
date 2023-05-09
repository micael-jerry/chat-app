import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const NavBar: React.FC = () => {
    const { data } = useSession()
    const route = useRouter();

    const mySignOut = () => {
        signOut();
        route.push('/');
    }
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
                                    <button className="btn btn-outline-success" onClick={() => mySignOut()}>SignOut</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </nav>
        </>
    )
}
