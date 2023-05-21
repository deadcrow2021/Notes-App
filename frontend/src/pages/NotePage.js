import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';

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
    <div>
        <p>{note?.body}</p>
    </div>
  )
}

export default NotePage