import { NavLink } from "react-router-dom";

function ProjectList(props) {
    const { projects } = props
    return (
        <div >
            {(projects || []).map(project => (
                <div style={{ display: 'flex' }} key={`key-${project.id}`}>
                    <NavLink to={`/projects/overview/${project.id}`}>  <div>Name : {project.name}</div></NavLink>
                </div>
            ))}
        </div>
    );
}

export default ProjectList;
