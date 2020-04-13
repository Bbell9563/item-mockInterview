import React from 'react'
import axios from 'axios'


class ItemForm extends React.Component {

  render() {
    return (
      <div style={style.form}>
        <div>
          <h3 style={style.formHeader}>Add An Item</h3>
        </div>
        <form>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div>
              <label for='name'>Name</label>
              <input type='text' name='name' style={style.input}/>
            </div>

            <div>
              <label for='image'>Image</label>
              <input type='file' name='image' style={style.file} />
            </div>
          </div>
          <div>
            <label for='Descriptions'>Description</label>
            <textarea type='text' rows='4' cols='40' style={style.input}/>
          </div>

          <div style={style.buttonHolder}>
          <button style={{...style.btn, color:'#9c1f0e'}}>Cancel</button>
          <button style={{...style.btn, color:'#49a652'}}>Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ItemForm

const style = {
  form: {
    margin: '1% 5%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#dae8d5',
    borderRadius: '20px',
    boxShadow: '0px 3px 10px #cccccc',
    padding:'1%'
  },
  formHeader: {
    textAlign: 'center'
  },
  btn: {
    width:'100%',
    border:'none',
    borderRadius:'20px',
    padding:'1%',
    margin:'1%',
    boxShadow: '0px 3px 10px #cccccc',
    backgroundColor:'#f5f5f5',
    outline:'none'
  },
  input: {
    width:'100%',
    border:'none',
    borderRadius:'10px',
    backgroundColor:'white',
    outline:'none',
    borderBottom:'1px solid grey'
  },
  buttonHolder:{
    display:'flex',
    justifyContent:'space-between'
  }
}

