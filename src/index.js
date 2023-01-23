/**
 * @description 회원가입 하는 함수
 * @param {string} nickname
 * @param {string} email
 * @param {string} password
 * @returns {object} message 및 토큰
 */
const signUp = (nickname, email, password) => {};

/**
 * @description 로그인 하는 함수
 * @param {string} email
 * @param {string} password
 * @returns {object} message 및 토큰
 */
const login = (eamil, password) => {};

/**
 * @description 할 일 만들기
 * @param {string} title
 * @param {string} content
 * @header Authorization: login token
 * @returns {object} title, content, id, createAt, updateAt
 */
const createTodo = (title, content) => {};

/**
 * @description 할 일 불러오기
 * @header Authorization: login token
 * @return {object} All Todo data
 */
const getTodos = () => {};

/**
 * @description 할 일 수정
 * @param {string} title
 * @param {string} content
 * @header Authorization: login token
 * @returns {object} title, content, id, createAt, updateAt
 */
const updateTodo = (title, content) => {};

/**
 * @description 할 일 삭제
 * @header Authorization: login token
 * @returns {object} null
 */
const deleteTodo = () => {};

/**
 * @description 특정 Todo 찾기
 * @header Authorization: login token
 * @returns {object} title, content, id, createAt, updateAt
 */

const getTodoById = () => {};
