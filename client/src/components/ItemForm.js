import React from 'react'
import axios from 'axios'


class ItemForm extends React.Component {

  render() {
    return (
      <div style={style.form}>
        <h3 style={style.formHeader}>Add An Item</h3>
        <form>
          <label for='name'>Name</label>
          <input type='text' name='name' />

          <label for='image'>Image</label>
          <input type='file' name='image' />

          <label for='name'>Description</label>
          <input type='text' name='name' />
        </form>
      </div>
    )
  }
}

export default ItemForm

const style = {
  form: {
    border: '1px solid grey'
  },
  formHeader: {
    textAlign: 'center'
  }
}

