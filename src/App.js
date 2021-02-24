import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Form';
import Member from './Member';
import axios from 'axios';

const initialValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState([])

  const [formValues, setFormValues] = useState(initialValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }

  const submitForm = () => {

    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim(),
    }
    
    if(!newMember.name || !newMember.email || !newMember.role)  {
      return;
    }

    axios
      .post('http://localhost:3000/', newMember).then(res => {setMembers(res.data)})
     
  
  }
  
  useEffect(() => {
    axios
      .get('http://localhost:3000/')
      .then(res => {
        setMembers([...members, res.data])
        
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
 


  return (
    <div className="App">  
      <Form
          values={formValues}
          update={updateForm}
          submit={submitForm}
      />
      {members.map(member => {
        return (
          <Member key={member.id} info={member}/>
        )
      })}
    </div>
  )
}

export default App;
