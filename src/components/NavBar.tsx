import { useSession, signOut } from 'next-auth/react'
import React from 'react'

export const NavBar: React.FC = () => {
    const { data } = useSession()
    return (
        <>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
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
