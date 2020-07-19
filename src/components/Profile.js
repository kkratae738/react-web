import React, { Component } from 'react'

const data = [
        { id: 1, title: 'ภาพสวย', pic:'./mg/trippy-dreams-1.jpg' },
        {id: 2, title: 'ภาพงาน', pic: './mg/images.jpeg'},
        {id: 3, title: 'ภาพดี', pic: './mg/124238677.jpeg'}
    
]
console.log(data)
export default class Profile extends Component {
    render() {
        return (
            <div>
                <h1>ข้อมูลส่วนตัว</h1>
                {data.map((itam) => {
                  return(
                      <div key={itam.id}>
                      <img src={itam.pic} width="300" />
                  <h3>{itam.title}</h3>   
                  </div>              
                   )
                })}
            </div>
        )
    }
}
