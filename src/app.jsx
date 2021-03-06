import './app.css';
import React from 'react';
import Habits from './components/habits'
import Nav from './components/nav'

class App extends React.Component {
  state = {
    
    habits: [
        {id: 1, name: 'Reading', count: 0},
        {id: 2, name: 'Running', count: 0},
        {id: 3, name: 'Codding', count: 0},
    ],
};


handleIncrement = habit=> {
  const habits = this.state.habits.map(item => {
    if(item.id === habit.id) {
      return {...habit, count: habit.count+1};
      }
      return item;
    
  });
  this.setState({habits: habits});
};
handleDecrement = habit => {
  const habits = this.state.habits.map(item => {
    if(item.id === habit.id) {
      const count = habit.count -1;
      return {...habit, count: count < 0? 0: count};
      }
      return item;
    
  });
  this.setState({habits: habits});
};
handleDelete = habit => {
   console.log(`handleDelete ${habit.name}`);
   const habits = this.state.habits.filter(item => item.id !== habit.id);
   this.setState({habits});
};
handleAdd = name => {
  const habits = [...this.state.habits, {id: Date.now(), name: name, count:0}];
  this.setState({habits});
}
handleReset= () => {
  const habits = this.state.habits.map(habit => {
    habit.count =0;
    return habit;
  });
  this.setState({ habits });
};
  render() {
    return (
      <>
        <Nav totalCount={this.state.habits.filter(item => item.count > 0).length}></Nav>
        <Habits habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        onAdd={this.handleAdd}
        onReset={this.handleReset}
        ></Habits>
        
        
      </>
    );
  }
}

export default App;