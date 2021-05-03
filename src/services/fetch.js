import { database } from './api-url.js'

export const fetchData = async (id, endpoint) => {
	var requestOptions = {
	  method: 'GET',
	  redirect: 'follow'
	};

	const response = await fetch(`${database}/${id}/${endpoint}`, requestOptions);
	const result = await response.json()
	.catch(error => console.log('error', error));

	return result.data;
}