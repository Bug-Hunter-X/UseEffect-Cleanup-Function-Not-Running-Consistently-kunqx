```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true; //Add a mounted flag
    // This effect runs after every render
    console.log('Effect runs!');
    return () => {
      mounted = false; //Update mounted before cleanup
      console.log('Cleanup function runs!');
    };
  }, [count]); //Add count to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```