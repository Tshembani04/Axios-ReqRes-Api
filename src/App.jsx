import React from "react";
import "./App.css";
import axios from "axios";

const App = () => {

axios.defaults.headers.common['Authorization'] = 12345;



  const instance = axios.create({
    baseURL: "https://reqres.in/api",
    timeout: 1000,
    headers: {'X-Custom-Header' : 'foobar'}
  })

  ///////////////////////////////////////AXIOS INSTANCE///////////////////////////////////////////////////////
  const instanceData = () => {
    instance.get('/users').then(res => console.log(res))
  };




  axios.defaults.baseURL = "https://reqres.in/api"

  ///////////////////////////////////////GET////////////////////////////////////////////////////////

  const getData = () => {

    // This is a fetch method
    // Destructuring Data
    //Instead of (res) 
    // (res) => console.log(res.data.data) ===== .then({data: data}) => console.log(data)
    // Response is a Promise in HTTP language
    axios.get("/users").then(({data: data}) => console.log(data)).catch(res => console.log(res))
  };



///////////////////////////////////////POST/////////////////////////////////////////////////////////////


  const config = {
   data: {
      name: 'Tshembani',
      job: 'Junior Developer'
    },
    headers: {
      'Content-Type': "A curious Nigga in the building",
    }
  }


  const postData = () => {
    axios.post("/users", config).then(res => console.log(res.data)).catch(res => console.log(res))
  };


////////////////////////////////////////UPDATE///////////////////////////////////////////////////////////////


  
  const updateData = async() => {
    try {
      const res = await axios.put('/2', {
        name: 'Jane',
        job: 'Senior Developer'
      })
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  };


////////////////////////////////////////DELETE/////////////////////////////////////////////////////////


//Getting the 204 status meaning the user 2 is deleted.
  const deleteData = () => {
    axios.delete('/2').then(res => console.log(res.status))
  };


  ////////////////////////////////////////MULTIPLE REQUESTS///////////////////////////////////////////////////////////
  const multiple = () => {
    Promise.all([axios.get('https://reqres.in/api/users?page=2'), 
  axios.post('https://reqres.in/api/users', config)]).then(res => console.log(res[0], res[1]))
  };

  return (
    <>
      <div className="grid">
        <button style={style} onClick={getData}>
          Get
        </button>

        <button style={style} onClick={postData}>
          Post
        </button>

        <button style={style} onClick={updateData}>
          Update
        </button>

        <button style={style} onClick={deleteData}>
          Delete
        </button>

        <button style={style} onClick={multiple}>
          Multiple
        </button>

        <button style={style} onClick={instanceData}>
          Instance
        </button>
      </div>
    </>
  );
};

export default App;

const style = {
  backgroundColor: "black",
  color: "white",
  padding: "4px  10px 2rem",
  border: "none",
  borderRadius: "4px",
  display: "block",
  marginBottom: "4px",
  fontWeight: "bold",
};
