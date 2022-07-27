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
// using class components
// src/mockCoop.js
let chickens = [
  {
    id: 1,
    name: "Miss Priss",
    hobbies: "cackling when babies sleep",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Chickens_in_the_rain_in_Jiaoxi.jpg"
  },{
    id: 2,
    name: "Fog Horn",
    hobbies: "pacing on the roof",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRICrAyg48CCgH5UK_Bey3WXX8LE6dj7f5zQ&usqp=CAU"
  },{
    id: 3,
    name: "Chick Lily",
    hobbies: "prancing in the dirt",
    image: "https://live.staticflickr.com/7201/6825992286_1762072c7b_b.jpg"
  },{
    id: 4,
    name: "Roo Stan",
    hobbies: "ruffling feathers",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj12DU8aptOCujtMyGovvWcKcHbpRsdEQwrg&usqp=CAU"
  }
]

export default chickens

//  Set the mock data into state in the App.js and pass it around the application.
// src/App.js
import mockCoop from './mockCoop.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      chickens: mockCoop
    }
  }


// using react hooks and functional components 
// src/MockCoop.js
// import React and the useState hook
import React, {useState} from "react"

// component function 
export default function MockCoop() {
  // set the initial state (an array with 1 object to start (this can be an empty object to start))
  const [chickens, setChickens] = useState([
    {
      id: 1,
      name: "Miss Priss",
      hobbies: "cackling when babies sleep",
      seeking: "a rooster who does not mind warming the eggs",
      image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Chickens_in_the_rain_in_Jiaoxi.jpg"
    },{
      id: 2,
      name: "Fog Horn",
      hobbies: "pacing on the roof",
      seeking: "anything with feathers",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRICrAyg48CCgH5UK_Bey3WXX8LE6dj7f5zQ&usqp=CAU"
    },{
      id: 3,
      name: "Chick Lily",
      hobbies: "prancing in the dirt",
      seeking: "a hen who has crossed the road",
      image: "https://live.staticflickr.com/7201/6825992286_1762072c7b_b.jpg"
    },{
      id: 4,
      name: "Roo Stan",
      hobbies: "ruffling feathers",
      seeking: "a rooster who will share the roof",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj12DU8aptOCujtMyGovvWcKcHbpRsdEQwrg&usqp=CAU"
    }
  ])
}

// ICEBOX - pass props through App.js
import MockCoop from './index'
pass the chickens into Index route 
// couldn't get this props to work. Placed chickens array on the Index page instead

// CluckIndex
<div className="App">
  <ul>
    {/* map over the users array */}
    {chickens.map((chicken) => (
      // display a <div> element with the user.name and user.type
      // parent element needs to have a unique key
      <div key={chicken.id}>
        <img src={chicken.image} alt="profile of chicken"/>
        <p>{chicken.seeking}</p>
      </div>
    ))}
  </ul>
  <button onClick={handleNewChicken}>Add eligible chicken</button>
</div>

```
- Add the ability to navigate between pages
  - $ yarn add react-router-dom
  - Import routing components to App.js
  ```javascript
  // replace switch with routes in version 6, use * instead of exact, element  with component call replaces component
  import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom'

  <Router>
    <Routes>
      <Route exact path="/*" element={<Home />} />
      <Route path="/cluckindex" element={<CluckIndex />} />
      <Route path="/cluckshow" element={<CluckShow />} />
      <Route path="/clucknew" element={<CluckNew />} />
      <Route path="/cluckedit" element={<CluckEdit />} />
      <Route element={<NoCluck />}/>
    </Routes>
  </Router>
  ```

## Testing with enzyme and jest
- $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
- $ yarn test
- Create a test file .test.js
```javascript

// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({adapter: new Adapter()})

describe("When Home renders", () => {
  it("displays a heading", () => {
    const home = shallow(<Home />)
    const homeHeading = home.find("h3").text()
    expect(homeHeading).toEqual("Welcome to Cat Tinder!")
  })
})
```
## Research
- https://www.w3schools.com/react/react_hooks.asp
- https://reactjs.org/docs/hooks-intro.html
- https://www.freecodecamp.org/news/react-components-jsx-props-for-beginners/
- https://www.geeksforgeeks.org/reactjs-functional-components/
- https://www.w3schools.com/react/react_components.asp
- https://medium.com/swlh/import-components-in-react-like-a-pro-b1340cb76a1b
- https://reactrouter.com/docs/en/v6/upgrading/v5#upgrade-to-react-router-v6
- https://dev.to/joelynn/react-hooks-working-with-state-arrays-2n2g
- https://www.digitalocean.com/community/tutorials/how-to-build-a-react-to-do-app-with-react-hooks
- https://ordinarycoders.com/blog/article/react-functional-components-state-props


      <h1>CluckIndex Page: A Basic Functional Component</h1>
      <ul>
        {/* map over the users array */}
        {chickens.map((chicken) => (
          // display a <div> element with the user.name and user.type
          // parent element needs to have a unique key
          <div key={chicken.id}>
            <img src={chicken.image} alt="profile of chicken"/>
            <p>Seeking {chicken.seeking}</p>
          </div>
        ))}
      </ul>