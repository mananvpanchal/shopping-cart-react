const url = process.env.REACT_APP_API;

console.log(process.env);

export const get = (path, successCL) => fetch(url+path)
.then(res => res.json())
.then(successCL)
.catch(console.log);