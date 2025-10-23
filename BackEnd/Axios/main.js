// AXIOS GLOBALS
// In "CUSTOM HEADERS" section below, we saw how we can add custom headers to a request before sending it. But what if we have many protected routes? Do we repeatedly do this? NO! This is where axios globals come in.
// So, Say you logged in some server and got this 'sometoken' as your auth-token. Now you need to send it with every request to access protected routes. 
axios.defaults.headers.common['X-Auth-Token'] = 'sometoken'; // Now, it will be in the headers of every request that we will make

// GET REQUEST
function getTodos() {
  // Long way
  // axios({
  //   method: 'get',
  //   url: 'https://jsonplaceholder.typicode.com/todos',
  //   // These are the Query parameters (stuff after ? in URL)
  //   params: {
  //     _limit: 5
  //   }
  // })
  // .then(res => showOutput(res))
  // .catch(err => console.log(err));

  // Short way
  axios.get('https://jsonplaceholder.typicode.com/todos', {
    params: {
      _limit: 5
    },
    timeout: 5 // So, This request will stop after 5 millisecond, ya to usse pehle response ajaye otherwise STOP
  })
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// POST REQUEST
function addTodo() {
  // Long way
  // axios('https://jsonplaceholder.typicode.com/todos',
  //   {
  //     title: 'New Todo',
  //     completed: false
  //   }
  // )
  // .then(res => showOutput(res))
  // .catch(err => console.log(err));

  //Short Way
  axios.post('https://jsonplaceholder.typicode.com/todos',
    {
      title: 'New Todoo',
      completed: false
    }
  )
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// PUT/PATCH REQUEST
function updateTodo() {
  axios.put('https://jsonplaceholder.typicode.com/todos/1',
    {
      title: 'Updated Todoo',
      completed: true
    }
  )
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// DELETE REQUEST
function removeTodo() {
  axios.delete('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// SIMULTANEOUS DATA
// Use: Say we want to do multiple requests and then do something when all those requests' promises have resolved
/*
  Here, axios.all() takes an array as input, all the requests inside this are executed in parallel and the promise returned by axios.all() resolves only when all those requests' promises have resolved 
*/
function getData() {
  axios.all([
    axios.get('https://jsonplaceholder.typicode.com/todos'),
    axios.get('https://jsonplaceholder.typicode.com/posts')
  ])
  // Method 1 : pureJS
  // .then(res => {
  //   console.log(res[0]);
  //   console.log(res[1]);
  //   showOutput(res[1])
  // })

  //Method 2: same as Method 1 but cleaner using axios.spread()
  .then(axios.spread((todos, posts) => showOutput(posts)))
  .catch(err => console.log(err));
}

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'some-type-of-token-here'
    }
  }

  // Sending custom headers in our POST request
  axios.post('https://jsonplaceholder.typicode.com/todos',
    {
      title: 'New Todoo',
      completed: false
    },
    config
  )
  .then(res => showOutput(res))
  .catch(err => console.log(err));
}

// TRANSFORMING REQUESTS & RESPONSES
function transformResponse() {
  const options = {
    method: 'post',
    url: 'https://jsonplaceholder.typicode.com/todos',
    data: {
      title: 'Hello World!',
      completed: false
    },
    // "concat" means add to the default axios response rather than overwriting it.
    transformResponse: axios.defaults.transformResponse.concat(data => {
      data.title = data.title.toUpperCase();
      return data
    })
  }

  axios(options).then(res => showOutput(res))
}

// ERROR HANDLING
function errorHandling() {
  axios.get('https://jsonplaceholder.typicode.com/WRONG_URL')
  .then(res => showOutput(res))
  .catch(err => {
    if(err.response){
      // Server responded with a status other than 200 range
      console.log(err.response.data); // Assuming the server/ API sends "data" in error.response
      console.log(err.response.status);
      console.log(err.response.headers);

      alert("Page Nhi mila! 404")
    }
    else if(err.request){
      // Request was made but there was no response
      console.error(err.request);
    }
    else{
      console.error(err.message)
    }
  });
}

// If you only want the catch to run for statu codes >= 500
// function errorHandling() {
//   axios.get('https://jsonplaceholder.typicode.com/WRONG_URL', {
//     validateStatus: function(status){
//       return status < 500; // only return False for >= 500 status and triggers "catch" block for them 
//     }
//   })
//   .then(res => showOutput(res))
//   .catch(err => {
//     if(err.response){
//       // Server responded with a status other than 200 range
//       console.log(err.response.data); // Assuming the server/ API sends "data" in error.response
//       console.log(err.response.status);
//       console.log(err.response.headers);

//       alert("Page Nhi mila! 404")
//     }
//     else if(err.request){
//       // Request was made but there was no response
//       console.error(err.request);
//     }
//     else{
//       console.error(err.message)
//     }
//   });
// }

// CANCEL TOKEN
function cancelToken() {
  const source = axios.CancelToken.source();

  axios.get('https://jsonplaceholder.typicode.com/todos', {
    cancelToken: source.token
  })
  .then(res => showOutput(res))
  .catch(thrown => {
    if(axios.isCancel(thrown)){
      console.log('Request canceled', thrown.message);
    }
  });

  let someCondition = true;
  if(someCondition){
    source.cancel('Request Canceled')
  }
}

// INTERCEPTING REQUESTS & RESPONSES
axios.interceptors.request.use(
  config => {
    console.log(`${config.method.toUpperCase()} request sent to ${config.url} at ${new Date().getTime()}`);

    return config
  },
  error => {
    return Promise.reject(error);
  }
);

// AXIOS INSTANCES
const axiosInstance = axios.create({
  // You can have other custom settings here
  baseURL: 'https://jsonplaceholder.typicode.com'
});

axiosInstance.get('/todos').then(res => showOutput(res))

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Event listeners
document.getElementById('get').addEventListener('click', getTodos);
document.getElementById('post').addEventListener('click', addTodo);
document.getElementById('update').addEventListener('click', updateTodo);
document.getElementById('delete').addEventListener('click', removeTodo);
document.getElementById('sim').addEventListener('click', getData);
document.getElementById('headers').addEventListener('click', customHeaders);
document
  .getElementById('transform')
  .addEventListener('click', transformResponse);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('cancel').addEventListener('click', cancelToken);