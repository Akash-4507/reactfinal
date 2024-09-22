import axios from 'axios'


const API = "https://66e526e15cc7f9b6273c6b6e.mockapi.io"

const getProjects = () => axios.get(`${API}/project`)
const getProjectbyID = (id) => axios.get(`${API}/project/${id}`)
const addProject = (projectdata) => axios.post(`${API}/project`, projectdata)
const editProject = (id, projectdata) => axios.put(`${API}/project/${id}`, projectdata)
const deleteProject = (id) => axios.delete(`${API}/project/${id}`)
export { getProjects, getProjectbyID, addProject, editProject, deleteProject }