import React from 'react';
import Rainbow from '../hoc/Rainbow'

const ComponentOne = (props) => {
  return (
    <div>
      <h4>This is component one</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repudiandae repellat illo magni eligendi cupiditate voluptates eius nam voluptate. Incidunt nihil ullam quae quia officia quaerat, deserunt eligendi explicabo totam?</p>
    </div>
  )
}

export default Rainbow(ComponentOne)
