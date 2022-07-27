// import React and the useState hook
import React from "react"

// component function - each component should have its own folder, default is not required 
export const MockCoop = () => {
  // set the initial state (an array with 1 object to start (this can be an empty object to start))
  const chickens = [
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
      image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj12DU8aptOCujtMyGovvWcKcHbpRsdEQwrg&usqp=CAU`,
    }
  ]  
 return chickens
}