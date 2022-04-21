import React from 'react'
import JsonData from './data.json'
function JsonDataDisplay(){
	const DisplayData=JsonData.map(
		(info)=>{
			return(
				<tr>
					<td>{info.id}</td>
					<td>{info.name}</td>
                    <td>{info.phonenumber}</td>
					<td>{info.lastname}</td>
				</tr>
			)
		}
	)

	return(
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
					<th>ID</th>
					<th>Lastname</th>
                    <th>Name</th>
					<th>Email</th>
					</tr>
				</thead>
				<tbody>
				
					
					{DisplayData}
					
				</tbody>
			</table>
			
		</div>
	)
}

export default JsonDataDisplay;
