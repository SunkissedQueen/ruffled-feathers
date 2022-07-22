## Getting Started

This project was built based on the following references 
- [Create React App](https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/cat-tinder/frontend/intro.md)
- [Functional Components](https://www.geeksforgeeks.org/reactjs-functional-components/)
- [React Hooks](https://reactjs.org/docs/hooks-overview.html)

## Create React App Process
- $ yarn create react-app <app-name>
- $ cd <app-name>
- $ git remote add origin <repo-url>
- $ git add .
- $ git commit -m "initial commit"
- $ git branch -m "main"
- $ git push origin main
- $ code .
- $ yarn start

## React Pages/Components
- Create three directories in your React application: assets, components, and pages
  - assets: images
  - components: header, footer, buttons
  - pages: home, index, show, new, edit, notfound
- Add the dependencies for Reactstrap and Bootstrap
  - $ yarn add bootstrap
  - $ yarn add reactstrap
  - Add to src/index.js: import 'bootstrap/dist/css/bootstrap.min.css'

- Functional components structure
```javascript
// arrow function
import React from 'react';
 
const App = () => {
  return <h1>Aloha</h1>;
}
 
export default App;

// function keyword
function App() {
  return <h2>Bonjour</h2>;
}

export default App;

// export on top line
export default function App() {
  return <h2>Syntactical Astronaut</h2>;
}
  ```
- Create placeholder data in the src directory
```javascript
// src/mockCoop.js
let chickens = [
  {
    id: 1,
    name: "Miss Priss",
    enjoys: "cackling when babies sleep",
    image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    name: "Fog Doodle",
    enjoys: "pacing on the roof",
    image: "https://images.unsplash.com/photo-1533743983669-94fa5c4338ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1092&q=80"
  }
]
export default chickens
```
- Set the mock data into state in the App.js and pass it around the application.
```javascript
// src/App.js
import mockCoop from './mockCoop.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      chickens: mockCoop
    }
  }
```
- Add the ability to navigate between pages
  - $ yarn add react-router-dom@5.3.0
  - Import routing components to App.js
  ```javascript
  import {
    BrowserRouter as Router,
    Route,
    Switch
  } from 'react-router-dom'

  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/catindex" component={CatIndex} />
      <Route path="/catshow" component={CatShow} />
      <Route path="/catnew" component={CatNew} />
      <Route path="/catedit" component={CatEdit} />
      <Route component={NotFound}/>
    </Switch>
  </Router>
  ```
## Research
- https://www.w3schools.com/react/react_hooks.asp
- https://reactjs.org/docs/hooks-intro.html
- https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/
- https://www.geeksforgeeks.org/reactjs-functional-components/
- https://www.w3schools.com/react/react_components.asp