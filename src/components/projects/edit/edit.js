import React, { useEffect, useState } from "react";
import SelectUserModal from '../common/selectUserModal'
import InputField from "../../common/form/inputField";
import axios from 'axios'
import { } from '../../../store/actions/projects'

function CreateProjects(props) {
    const { getUsers, users: { users }, CreateProject, project } = props
    useEffect(() => {
        getUsers()
    }, [])

    const [projectInput, setProjectInput] = useState({})
    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setProjectInput((prev) => ({ ...prev, [name]: value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        CreateProject(projectInput)
    }
    return (
        <div style={{ background: 'transparent' }}>
            <h1>Create Project</h1>
            <div>
                <InputField value={projectInput.name} name="name" type="text" onChange={handleChange} placeholder="Project Name" />
            </div>
            <div>
                <InputField value={projectInput.link} name="link" type="text" onChange={handleChange} placeholder="Repo Link" />
            </div>
            <div>
                <InputField value={projectInput.description} name="description" type="text" onChange={handleChange} placeholder="Description" />
            </div>
            <div style={{ background: 'transparent' }}>
                <SelectUserModal users={users || []} />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default CreateProjects;
