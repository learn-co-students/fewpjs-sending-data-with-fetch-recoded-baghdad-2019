// Add your code here
Function submitData  (name, email);{
  const url=http://localhost:3000/users
const= requestOption {
  headers:{
    "Content-Type":
    "applecation/JSON",
    "Accept": "applecation/JSON"
};
  body: JSON.stringify(name:name , email:email)
};
fetch(http://localhost:3000/users, reaquestOption)
