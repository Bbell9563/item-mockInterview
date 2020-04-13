import React from 'react'
import axios from 'axios'
import ItemForm from './ItemForm'
import Item from './Item'

class Home extends React.Component {
  state = { items: [], showForm: false }

  componentDidMount() {
    axios.get('/api/items')
      .then(res => this.setState({ items: res.data }))
      .catch(e => alert(e))
  }

  showForm = () => {
    const {showForm} =this.state
    this.setState({showForm: !showForm})
  }

  render() {
    const { items, showForm } = this.state
    return (
      <div>
        <div style={style.headerContainer}>
          <h1 style={style.header}>All Items</h1>
          <button style={style.addButton} onClick={this.showForm}>{showForm ? "Cancel" : "Add An Item"} </button>
        </div>
        {showForm ? <ItemForm /> : <></>}
        <div style={style.itemContainer}>
          {items.map(item=>
          <div style={style.item}>
            <Item item={item} />
            </div>
            )}
        </div>
      </div>
    )
  }
}

export default Home

const style = {
  headerContainer: {
    color: 'white',
    backgroundColor: '#94b57f',
    borderBottomRightRadius: '70px',
    display:'flex',
    justifyContent:'space-between',
    padding:'1%'
  },
  header:{
    margin:'0px',
  },
  itemContainer: {
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-around'
  },
  addButton:{
    border:'none',
    borderRadius:'20px',
    color:'white',
    backgroundColor:'#759163',
    fontSize:'1vw',
    padding:'1%',
    marginRight:'3%',
    outline:'none'
  },
  item:{
    width:'30%',
    textAlign:'center',
    border:'1px solid lightgrey'
  }
}

