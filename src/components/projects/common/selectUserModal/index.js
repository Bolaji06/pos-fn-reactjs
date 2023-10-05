import React, { useState } from "react";

const SelectProjectModal = ({ users }) => {
    const [open, setOpen] = useState(false)
    return (
        <div style={{ background: 'transparent' }}>
            {!open && <button onClick={() => setOpen(!open)}>Select Project From The List</button>}
            {open && (
                <div
                    style={{ position: 'fixed', display: 'flex', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 0.1)' }}>
                    <div style={{ borderRadius: '5px', width: '60%', height: '90%', background: '#fff', margin: 'auto', alignItems: 'center' }}>
                        <div>
                            {users && users.map(user => (
                                <div style={{ padding: '5px' }}>
                                    <button>
                                        <span> {user.firstName}</span>
                                        <span>{user.lastName}</span>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setOpen(!open)}>Cancel</button>
                    </div>
                </div>)}
        </div>);
}

export default SelectProjectModal;
