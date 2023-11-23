import sendRequest from './send-request';
const BASE_URL = '/api/users';

export function signUp(userData) {
	return sendRequest(BASE_URL, 'POST', userData);
}

export function login(credentials) {
	return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function getUser() {
	return sendRequest(`${BASE_URL}/user`);
}

export function getQuestionnaire(userId) {
	return sendRequest(`${BASE_URL}/${userId}/questionnaire`);
}

export function submitQuestionnaire(updatedQuest) {
	return sendRequest(`${BASE_URL}/submitQuestionnaire`, "POST", updatedQuest);
}





