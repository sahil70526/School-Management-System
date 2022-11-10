import React, { useState } from 'react'
import { Form, Button, Table } from 'react-bootstrap'

function Login() {
  const [name, setName] = useState(null);
  const [user, setUser] = useState(false);
  const [pass, setPass] = useState(null)
  const [interest, setInterest] = useState("")
  const [terms, setTerms] = useState(false)
  function getFormData(e) {
    e.preventDefault()

  }
  return (
    <div >

      {user && (
        <>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>E-mail</th>
                <th>Password</th>
                <th>Interest/Faculity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                
                <td>{name}</td>
                <td>{pass}</td>
                <td>{interest}</td>
              </tr>
              </tbody>
          </Table>
          {
            terms ? <h4>You agreed to terms</h4> : <h4>Please agree to terms and conditions</h4>
          }
        </>
      )}
      <div style={{ backgroundColor: "powderblue", height: "330px", width: "400px", marginLeft: "500px", marginTop: "100px", borderRadius: "10px" }}>

      <Form onSubmit={getFormData}>
        <Form.Group className="mb-3" controlId="formBasicEmail" onChange={(v) => setName(v.target.value)} >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" onChange={(f) => setPass(f.target.value)}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Select aria-label="Default select example" onChange={(g) => setInterest(g.target.value)}>
        <option>Select Your Faculity</option>
          <option>Engineering</option>
          <option>Medical</option>
          <option>Arts</option>
          <option>Science</option>
          <option>Comerce</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="formBasicCheckbox" onChange={(r) => setTerms(r.target.checked)}>
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={() => setUser(true)}>
          Submit
        </Button>
      </Form>
      </div>
    </div>
  )
}

export default Login