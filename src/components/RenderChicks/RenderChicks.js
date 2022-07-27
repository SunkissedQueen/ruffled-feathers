import React from "react";

export const RenderChicks = ({chickens}) => {
  // conditional to ensure that app doesn't break if no array is received
  if(!chickens) return null

  return(
    <>
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
    </>    
  )
}