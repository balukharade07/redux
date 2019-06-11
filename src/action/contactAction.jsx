import {
	GET_CONTACTS,
	GET_CONTACT,
	UPDATE_CONTACT,
	DELETE_CONTACT,
	ADD_CONTACT
} from "../action/types";
import API from "../api";

export const getConatcts = () => async dispatch => {
	try {
		const res = await API.get(`users`);
		const data = res.data;
		dispatch({
			type: GET_CONTACTS,
			payload: data
		});
	} catch (e) {
		alert("No network");
	}
};
export const deleteConatct = id => async dispatch => {
	API.delete(`users/${id}`);
	dispatch({
		type: DELETE_CONTACT,
		payload: id
	});
};
export const addConatcts = conatct => async dispatch => {
	const res = API.post(`users`, conatct);
	dispatch({
		type: ADD_CONTACT,
		payload: res.data
	});
};
export const getConatct = id => async dispatch => {
	try {
		const res = await API.get(`users/${id}`);
		const data = res.data;
		dispatch({
			type: GET_CONTACT,
			payload: data
		});
	} catch (e) {
		alert("No network");
	}
};

export const updateConatct = contact => async dispatch => {
	try {
		const res = await API.put(`users/${contact.id}`, contact);
		const data = res.data;
		dispatch({
			type: UPDATE_CONTACT,
			payload: data
		});
	} catch (errHandler) {
		alert(errHandler);
	}
};
