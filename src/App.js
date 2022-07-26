import React from 'react'

import { 
  Home, 
  Header, 
  Footer, 
  CluckIndex, 
  CluckShow, 
  CluckNew, 
  CluckEdit, 
  NoCluck,
  MockCoop 
} from './index'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

export default function App() {

  // const [chickens, setChickens] = useState([
  //   {
  //     id: 1,
  //     name: "Miss Priss",
  //     hobbies: "cackling when babies sleep",
  //     image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Chickens_in_the_rain_in_Jiaoxi.jpg"
  //   },{
  //     id: 2,
  //     name: "Fog Horn",
  //     hobbies: "pacing on the roof",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRICrAyg48CCgH5UK_Bey3WXX8LE6dj7f5zQ&usqp=CAU"
  //   },{
  //     id: 3,
  //     name: "Chick Lily",
  //     hobbies: "prancing in the dirt",
  //     image: "https://live.staticflickr.com/7201/6825992286_1762072c7b_b.jpg"
  //   },{
  //     id: 4,
  //     name: "Roo Stan",
  //     hobbies: "ruffling feathers",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj12DU8aptOCujtMyGovvWcKcHbpRsdEQwrg&usqp=CAU"
  //   }
  // ])

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route path="/cluckindex" element={<CluckIndex />} />
          <Route path="/cluckshow" element={<CluckShow />} />
          <Route path="/clucknew" element={<CluckNew />} />
          <Route path="/cluckedit" element={<CluckEdit />} />
          <Route element={<NoCluck />}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

