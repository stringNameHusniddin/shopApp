import axios from 'axios'
import {useState} from 'react'
import { useCookies } from 'react-cookie'
import { FlexColoumn } from './style'
import { useDispatch } from 'react-redux'
import { postItem } from '../slice'

const Add = () => {
    const [nameCookie, setNameCookie] = useCookies(['nameCookie'])
    const [token] = useCookies(['mytoken'])

    const [title, setTitle] = useState('')
    const [cost, setCost] = useState('')
    const [body, setBody] = useState('')
    const [image, setImage] = useState('')
    

    let dispatch = useDispatch()

    const post_item = ()=>{
        const added_user = String(nameCookie.nameCookie)
        const formField = new FormData()
        formField.append('title', title)
        formField.append('cost', cost)
        formField.append('body', body)
        formField.append('image', image)
        formField.append('added_user', added_user)

        axios.post('http://127.0.0.1:8000/api/item/', formField, {
            headers: {
                'Authorization': `Token ${token.mytoken}`
            }
        }).then(
            res=>{
                dispatch(postItem(res.data))
            }
        )
    }

    return (
        <div style={{ ...FlexColoumn, width: 500, margin: "150px auto" }}>
            <h1>Tavar qo'shish</h1>
            <div className="mb-3 row" style={{ width: "100%" }}>
                <label htmlFor="inputName" className="col-sm-2 col-form-label">Sarlavha</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputName" onChange={e => setTitle(e.target.value)}/>
                </div>
            </div>
            <div className="mb-3 row" style={{ width: "100%" }}>
                <label htmlFor="inputName" className="col-sm-2  col-form-label">Narx</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="inputName" onChange={e => setCost(parseInt(e.target.value))}/>
                </div>
            </div>
            <div className="mb-3" style={{ width: "95%" }}>
                <label htmlFor="textArea" className="form-label">Malumotlar</label>
                <textarea className="form-control" id="textArea" rows="3" onChange={e=> setBody(e.target.value)}></textarea>
            </div>
            <div className="mb-3" style={{ width: "95%" }}>
                <label htmlFor="formFile" className="form-label">Rasm</label>
                <input className="form-control" type="file" id="formFile" onChange={e=>setImage(e.target.files[0])}/>
            </div>
            <button onClick={post_item} className='btn btn-success'>Qo'shish</button>
        </div>
    )
}

export default Add