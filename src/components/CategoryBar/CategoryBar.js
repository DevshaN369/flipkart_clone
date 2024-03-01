import React from 'react'
const CategoryBar = ({imgsrc,categoryName}) => {
  return (
    <div className="CategoryBar">
    <div className="categoryBar_Img">
      <img src={imgsrc} alt="CategoryImg" />
    </div>
    <p className="categoryBar_name">{categoryName}</p>
  </div>
  )
}

export default CategoryBar