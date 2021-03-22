import './App.css';
import Button from 'react-bootstrap/Button';
function App() {

  function getTime(){
    fetch('http://localhost:5000/graphql',{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: `
        query {
          time {
              hour
              min
              sec
          }
        }
      ` 
    }),
  })
  .then(res => res.json())
  .then(res => console.log(res.data));


  }


  return (
    <div className="App">
    <header className="App-header">
    <div className='row'>
    <div className='col-6'>
            <Button onClick={getTime}>
            Get Time
            </Button>
      </div>
      <div className='col-6'>
        ^CLICK HERE ^
      </div>
      
    </div>
    </header>
    </div>
  );
}

export default App;
