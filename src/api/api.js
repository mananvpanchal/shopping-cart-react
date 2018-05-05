const url = 'https://mysterious-bayou-41214.herokuapp.com';

export const get = (path, successCL) => fetch(url+path)
.then(res => res.json())
.then(successCL)
.catch(console.log);