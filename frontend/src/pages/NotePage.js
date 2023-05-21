import React, {useEffect, useState} from 'react'
import { useParams, Link } from 'react-router-dom';
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
    const { id } = useParams();

    let [note, setNote] = useState(null)

    useEffect(() => {
        get_note()
    }, [id]);

    const get_note = async () => {
        let resp = await fetch(`http://127.0.0.1:8000/data/${id}`);
        let data = await resp.json();
        console.log(note)
        setNote(data)
    }

    return (
    <div className='note'>
        <div className='note-header'>
            <h3>
                <Link to={'/'}>
                    <ArrowLeft />
                </Link>
            </h3>
        </div>
        <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage