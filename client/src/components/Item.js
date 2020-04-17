import React from 'react'


const Item = ({ item }) => {
  return (
    <div style={style.itemContainer}>
      <div style={style.imageContainer}>
        <div style={style.crop}>
          <img src={item.image} alt='itemImage' />
        </div>
      </div>
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
    backgroundColor: 'white',
    boxShadow: '0px 1px 5px #bfbfbf',
    borderRadius: '5px',
    padding: '1%',
  },
  imageContainer: {
    background: '#fff',
    display: 'inline-block',
    verticalAlign: 'top',
    width: '30%',
    marginRight: '.5em',
    marginBottom: '.3em',
    borderRadius: '5px',
    overflow: 'hidden',
    boxShadow: '0px 3px 10px #cccccc',
  },
  image: {
    display: 'block',
    minWidth: '100%',
    minHeight: '100%',
    margin: ' auto',
    position: 'absolute',
    top: '-100%',
    right: '-100%',
    bottom: '-100%',
    left: '-100%',
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

    width: '70%'
  }
}

export default Item