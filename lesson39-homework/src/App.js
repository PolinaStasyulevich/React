import React from 'react';
import Button from './components/Button';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Button text="FIND OUT MORE" />

      <Card
        title="ROBO"
        price="15.000"
        description="УМК по робототехнике"
      />
      <Card
        title="ROBO"
        price="10.000"
        description="УМК по программированию"
      />
    </div>
  );
}

export default App;
