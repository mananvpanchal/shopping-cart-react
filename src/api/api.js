const url = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:5000' 
    : 'https://mysterious-bayou-41214.herokuapp.com';

export const get = (path, successCL) => fetch(url+path)
.then(res => res.json())
.then(successCL)
.catch(console.log);