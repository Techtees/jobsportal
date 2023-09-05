import { FaRegEye, FaPen,FaTrash } from 'react-icons/fa';
function Table() {
    return(
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Job Type</th>
            <th>Posted Date</th>
            <th>Application Deadline</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>new developer</td>
            <td>application</td>
            <td>today</td>
            <td>others</td>
            <td className='actions'>
                <FaRegEye  color='#338573'/>
                <FaPen  color='#04BCF6'/>
                <FaTrash  color='#FA0606' />
            </td>
        </tr>
        <tr>
            <td>new developer</td>
            <td>application</td>
            <td>today</td>
            <td>others</td>
            <td className='actions'>
                <FaRegEye  color='#338573'/>
                <FaPen  color='#04BCF6'/>
                <FaTrash  color='#FA0606' />
            </td>
        </tr>
    </tbody>
</table>
    )
}

export default Table;
