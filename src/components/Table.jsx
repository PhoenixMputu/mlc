import '../css/table.scss'
import { AiFillDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

const Table = ({type, data}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Titre</th>
                    <th>Descriptions</th>
                    {type === 'event' && <th>Date</th>}
                    {type === 'event' && <th>Lieu</th>}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map(({title, description, date, id, lieu}) => (
                    <tr key={id}>
                        <td>{title}</td>
                        <td>{description}</td>
                        {type === 'event' && <td>{date}</td>}
                        {type === 'event' && <td>{lieu}</td>}
                        <td className={type === "event" ? "action" : null}>{type === 'event' ? <><BsPencil color='green'/><AiFillDelete color='red'/></> : <AiFillDelete color='red'/>}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table;