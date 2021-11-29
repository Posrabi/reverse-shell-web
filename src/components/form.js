import React, { useState } from "react"
import {Button, Form, FormField, Input } from "semantic-ui-react"

export const CommandForm = ({onNewStatus}) => {
    const [cmd, setCmd] = useState("")
    return (
        <Form>
            <Form.Field>
                <Input value = {cmd} placeholder = "enter command here" onChange={e=>setCmd(e.target.value)}/>
            </Form.Field>
            <FormField>
                <Button onClick = {async() => {
                    const send = {"cmd" : cmd}
                    const response = await fetch("http://127.0.0.1:5000/", {
                        method : "POST",
                        mode: "cors",
                        headers: {
                            "Content-Type" : "application/json"   
                        },
                        body: JSON.stringify(send)
                    })
                    if (response.ok) {
                        console.log("response worked!")
                        response.json().then(data => {
                            onNewStatus(data)
                        })
                        setCmd("")
                    }
                }} >Send</Button>
            </FormField>
        </Form>
    )
}