import React from 'react'

export default function Form(props)   {
    const {values, update, submit} = props

    const onChange = e => {
        const {name, value} = e.target

        update(name, value)
    }

    const onSubmit = e => {
        e.preventDefault()

        submit()
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-inputs'>
                <label>name
                    <input name='name' type='text' value={values.name} onChange={onChange} placeholder='your name..' maxLength='25'/>
                </label><br></br>
                <label>email
                    <input name='email' type='email' value={values.email} onChange={onChange} placeholder='name@email.com'/>
                </label><br></br>
                <label>role
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value=''>---select role---</option>
                        <option value='FRONT END ENGINEER'>FRONT END </option>
                        <option value='BACK END ENGINEER'>BACK END</option>
                        <option value='WEB DESIGNER'>DESIGNER</option>
                    </select>
                </label>

                <div className='submit'>
                    <button disabled ={!values.name || !values.email || !values.role}>submit</button>
                </div>
            </div>
        </form>
    )
}