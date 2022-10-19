import logo from './logo.svg';
import axios from 'axios';
import './App.css';

import Form from './components/Form';

// const register = async (input) => {


//       await axios.post('http://localhost:3000/api/v1/auth/register', 
//         input
//       )
//       .then(function (response) {
//         console.log(response);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
// }


const login = async (input) => {


  await axios.post('http://localhost:3000/api/v1/auth/login', 
    input
  )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}


// const getRanking = async () => {


//   await axios.get('http://localhost:3000/api/v1/portfolios',
//   )
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
// }

// getRanking();

function App() {
  return (
    // <Form onRegister={register} />

    
    <Form formAction={login} />
  
  );
}

export default App;
