import React, {useState} from 'react';
 
import { MockCoop, RenderChicks } from '../components';

export default function CluckIndex() {
  // use MockCoop in useState for data use a fallback of empty array so the app doesn't crash
  const [chickens, setChickens] = useState(MockCoop || [])
  // this array is now in MockCoop on components folder
  // const [chickens, setChickens] = useState([
  //   {
  //     id: 1,
  //     name: "Miss Priss",
  //     hobbies: "cackling when babies sleep",
  //     seeking: "a rooster who does not mind warming the eggs",
  //     image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Chickens_in_the_rain_in_Jiaoxi.jpg"
  //   },{
  //     id: 2,
  //     name: "Fog Horn",
  //     hobbies: "pacing on the roof",
  //     seeking: "anything with feathers",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRICrAyg48CCgH5UK_Bey3WXX8LE6dj7f5zQ&usqp=CAU"
  //   },{
  //     id: 3,
  //     name: "Chick Lily",
  //     hobbies: "prancing in the dirt",
  //     seeking: "a hen who has crossed the road",
  //     image: "https://live.staticflickr.com/7201/6825992286_1762072c7b_b.jpg"
  //   },{
  //     id: 4,
  //     name: "Roo Stan",
  //     hobbies: "ruffling feathers",
  //     seeking: "a rooster who will share the roof",
  //     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj12DU8aptOCujtMyGovvWcKcHbpRsdEQwrg&usqp=CAU"
  //   }
  // ])

  return (
    <div className="App">
      <RenderChicks chickens={chickens}/>
    </div>
  )
}