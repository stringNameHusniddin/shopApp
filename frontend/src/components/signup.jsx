import { useState } from 'react'
import { FlexColoumn } from './style'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useCookies(['mytoken'])
    const [nameCookie, setNameCookie] = useCookies(['nameCookie'])
    const navigate = useNavigate()


    const signupBtn = () => {
        axios.post('http://127.0.0.1:8000/api/user/', {
            username,
            password
        }).then(() => {
            axios.post('http://127.0.0.1:8000/auth/', {
                username,
                password
            }).then(
                res=>{
                    setToken('mytoken', res.data.token)
                    setNameCookie('nameCookie', username)
                    navigate('/')     
                }
            )   
        })
    }

    return (
        <div style={{ ...FlexColoumn, width: 500, margin: "300px auto" }}>
            <h1>Ro'yxatdan o'tish</h1>
            <div className="mb-3 row" style={{ width: "100%" }}>
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Ism</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputName" onChange={e => setUsername(e.target.value)} />
                </div>
            </div>
            <div className="mb-3 row" style={{ width: "100%" }}>
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Parol</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" id="inputPassword" onChange={e => setPassword(e.target.value)} />
                </div>
            </div>
            <button className='btn btn-success' style={{ width: 100 }} onClick={signupBtn}>Jo'natish</button>
        </div>
    )
}

export default Signup