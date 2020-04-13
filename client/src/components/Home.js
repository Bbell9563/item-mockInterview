import React from 'react'

class Home extends React.Component {
  state={items:[]}

  componentDidMount(){
    
  }

  render(){
    return(
      <div>
        <h1 style={style.header}>All Items</h1>
        <div style={style.itemContainer}>

        </div>
      </div>
    )
  }
}

const style = {
  header:{
    color:'white',
    backgroundColor:'#94b57f',
    margin:'0px',
    padding:'1%',
    borderBottomRightRadius:'70px',
  },
  itemContainer:{
    display:'flex',
    justifyContent:'space-around'
  }
}

export default Home