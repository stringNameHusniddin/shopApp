import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineModeEdit, MdDeleteOutline } from 'react-icons/md'
import { useCookies } from 'react-cookie'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { deleteItem } from '../slice'

const Card = () => {
    const [nameCookie] = useCookies(['nameCookie'])
    const [token] = useCookies(['mytoken'])

    let item = useSelector((state) => state.item.data)
    let distpach = useDispatch()

    const delete_item = (id) => {
        axios.delete(`http://127.0.0.1:8000/api/item/${id}`, {
            headers: {
                'Authorization': `Token ${token.mytoken}`
            }
        }).then(() => {
            distpach(deleteItem(id))
        })
    }

    return (
        <>
            {
                item.map(mal =>
                    <div key={parseInt(mal.id)} className="card" style={{ width: "18rem" }}>
                        <img src={mal.image} className="card-top-img" alt="..." />
                        <div className="card-body">
                            <h3>{mal.title}</h3>
                            <p>{mal.body}</p>
                            <p>{mal.cost}$</p>

                            {
                                mal.added_user === nameCookie.nameCookie ? (
                                    <>
                                        <Link className="btn btn-primary" style={{ marginRight: 15 }}>
                                            <MdOutlineModeEdit style={{ fontSize: 24 }} />
                                        </Link>
                                        <button onClick={() => {
                                            delete_item(mal.id)
                                        }} className="btn btn-danger">
                                            <MdDeleteOutline style={{ fontSize: 24 }} />
                                        </button>
                                    </>
                                )
                                    : null
                            }

                        </div>
                        <div className="card-footer">
                            {mal.time}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Card