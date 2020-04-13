import React from 'react'


const Item = ({item}) => {
  return(
    <div style={style.itemContainer}>
      {item.name}
    </div>
  )
}

const style={
  itemContainer:{
  }
}

export default Item