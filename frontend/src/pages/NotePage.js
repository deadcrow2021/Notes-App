import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = (props) => {
    const { id } = useParams();
    const { history } = props
    console.log(history)

    let [note, setNote] = useState(null)

    useEffect(() => {
        get_note()
    }, [id]);

    const get_note = async () => {
        if (id === 'new') return
        let resp = await fetch(`http://127.0.0.1:8000/data/${id}`);
        let data = await resp.json();
        setNote(data)
    }

    const update_note = async () => {
        fetch(`http://127.0.0.1:8000/data/update/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }
    
    const delete_note = async () => {
        fetch(`http://127.0.0.1:8000/data/delete/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
        history.push('/')
    }

    const handle_submit = () => {
        if (id !== 'new' && !note?.body === '') {
            delete_note()
        } else if (id === 'new') {
            update_note()
        } else if (id === 'new' && note !== null) {
            create_note()
        }
        history.push('/')
    }

    let handle_change = (value) => {
        setNote(note => ({ ...note, 'body': value }))
    }

    const create_note = async () => {
        fetch('http://127.0.0.1:8000/data/create/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }
    
    return (
        <div className='note'>
        <div className='note-header'>
            <h3>
                <ArrowLeft onClick={handle_submit}/>
            </h3>
            {id !== 'new' ? (
                <button onClick={delete_note}>Delete</button>
                ) : (
                <button onClick={handle_submit}>Done</button>
            )}
        </div>
        <textarea onChange={(e) => handle_change(e.target.value)} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage