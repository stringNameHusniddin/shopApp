import React from 'react'
import { Link } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Navbar = () => {

    const [token, setToken, removeToken] = useCookies(['mytoken'])
    const [nameCookie, setNameCookie, removeName] = useCookies(['nameCookie'])


    return (
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom" style={{ padding: "0 30px" }}>
            <ul className="nav col-12 col-md-auto  align-items-center justify-content-center mb-md-0">
                <li><Link to='/' className="nav-link px-2 link-success">ShopApp</Link></li>
                <li><Link to='/add' className="nav-link px-2 link-dark">Tavar qo'shish</Link></li>
            </ul>

            <div className="col-md-3 text-end">
                {token.mytoken !== undefined ? <button onClick={
                    ()=>{
                        removeToken(['mytoken'])
                        removeName(['nameCookie'])
                    }
                } className='btn btn-danger'>
                    Logout
                </button>: <>
                    <Link to='/login'><button type="button" className="btn btn-outline-primary me-2">Login</button></Link>
                    <Link to='/signup'><button type="button" className="btn btn-primary">Sign-up</button></Link>
                </>}
            </div>
        </header>
    )
}

export default Navbar