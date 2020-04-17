import React from 'react'


const Item = ({ item }) => {
  return (
    <div style={style.itemContainer}>

      <img src={item.image} alt='itemImage' />

      <div style={style.informationContainer}>
        <h3 style={style.text}>{item.name}</h3>
        <h5 style={style.text}>Description</h5>
        <h6 style={style.text}>{item.description}</h6>
        <h6>Likes: {item.likes}</h6>
      </div>

    </div>
  )
}

const style = {
  itemContainer: {
    marginTop: '1%',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: 'white',
    boxShadow: '0px 1px 5px #bfbfbf',
    borderRadius: '5px',
    padding: '1%',
  },
  imageContainer: {
    background: '#fff',
    display: 'inline-block',
    verticalAlign: 'top',
    width: '100%',
    marginRight: '.5em',
    marginBottom: '.3em',
    borderRadius: '5px',
    overflow: 'hidden',
    boxShadow: '0px 3px 10px #cccccc',
  },
  image: {
    display: 'block',
    minWidth: '100%',
    margin: ' auto',
    position: 'absolute',
    objectFit:'cover'
  },
  crop: {
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  text: {
    margin: '0px'
  },
  informationContainer: {

  }
}

export default Item
