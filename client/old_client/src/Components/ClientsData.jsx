import React, { useEffect, useState }  from 'react'

export default function ClientsData() {
    const [data, getData] = useState([])
    const URL = 'https://jsonplaceholder.typicode.com/posts';
 
    useEffect(() => {
        fetchData()
    }, [])
 
    const fetchData = () => {
        fetch(URL)
        .then((res) =>
        res.json())

        .then((response) => {
        console.log(response);
        getData(response);
    })

    }
 
    return (
        <div>
            <h1>User's data</h1>
            <table className='table'>
                <tbody>
                    <tr>
                        <th>User Id</th>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                    </tr>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.userId}</td>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
 
        </div>
    );
}
