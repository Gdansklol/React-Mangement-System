import React,{Component }from 'react';
import Customer from './components/Customer'
import './App.css';

const customers =[
 {
  'id':'1',
  'image':'https://placeimg.com/64/100/1',
  'name': 'Emma Watson',
  'birthday': '961217',
  'gender': 'Female',
  'job': 'Student'
},
{
  'id':'2',
  'image':'https://placeimg.com/64/50/2',
  'name': 'Chris Evans',
  'birthday': '951217',
  'gender': 'Male',
  'job': 'Student'
},
{
  'id':'3',
  'image':'https://placeimg.com/64/48/3',
  'name': 'Molly Sanden',
  'birthday': '981217',
  'gender': 'Female',
  'job': 'Student'
}
]

class App extends Component {
  render(){
    return (
    <div>
      {
        customers.map(c =>{
          return(
          <Customer
          key={c.id}
            id= {c.id}
            image= {c.image}
            name={c.name}
            birthday={c.gender}
            gender={c.gender}
            job={c.job}
          />
          );
        })
      }
      </div>
    );
  }
  }
  
export default App;
