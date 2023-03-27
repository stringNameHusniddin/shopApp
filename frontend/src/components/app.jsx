import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from "axios"
import Navbar from './navbar'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './home'
import Login from './login'
import Signup from './signup'
import Add from './add'
import {useSelector, useDispatch} from 'react-redux'
import { set_item } from '../slice'

const App = () => {

    const [token] = useCookies(['mytoken'])
    const navigate = useNavigate()

    const data = useSelector((state)=>state.item.count)
    const dispatch = useDispatch()


    useEffect(() => {
            axios.get('http://127.0.0.1:8000/api/item/', {
                headers: {
                    'Authorization': `Token 472e60b8306f6363e8ab4453f1d66f96a8ef4609`
                }
            }).then(res => {
                dispatch(set_item(res.data))
            })
    }, [])

    return (
        <div>
            <Navbar  />

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
                <Route path='/add' element={<Add/>} />
            </Routes>
        </div>
    )
}

export default App