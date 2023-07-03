import React,{ useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios  from '../axios'

function LogoutUser() {
    const [unable, setUnable] = useState(false)
    const redirect = useNavigate()
    
    useEffect(() => {
        try  {
            axios.post(`logout/`,
            { refresh_token: localStorage.getItem('refresh') })
            .then(
                localStorage.clear(),
                redirect('/user/login'),
            )
            .catch( err => {
                console.error(err)
                setUnable(true)
            })
        }
        catch (error) {
            console.error(error)
            setUnable(true)
        }
    }, [redirect])
    
    return (
        <>
        {unable &&
        <div> Hare Krsna</div>
        }
        </>
    )
}

export default LogoutUser