import {useState} from 'react'

const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)
    const onChange = (e) => {
        const { name, value, type, checked } = e.target
        setForm({...form, [name]: type === 'checkbox' ? checked : value })
    }
    return {form, onChange}
}

export default useForm