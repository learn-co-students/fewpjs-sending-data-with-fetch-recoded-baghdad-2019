// Add your code here
function submitData(name,email) {
    const URL= `http://localhost:3000/users`;
    const requestOption = {
      headers: {
        'Content-Type':'application/json',
        'Accept': 'application/json'
      },
      method: "POST",
      body: JSON.stringify( {
        name: name, email:email
      })
    }
    return fetch(URL,requestOption)
  }
  
  submitData("John","john@somethin.com").then(res =>{
  return res.json()}
  ).then(json=> {
      let elem=document.createElement('div');
    elem.innerHTML= json.id;
    document.body.appendChild(elem);
  }).catch( err => {
    document.body.innerHTML= err.message
  })
  