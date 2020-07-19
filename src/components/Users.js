import React, { Component } from 'react'
import Urea from './User';

const users = [
    {id: 1, fname:"Payurat", lname:"Khacharin"},
    {id: 2, fname: "Yupin", lname:"nadee"}
]

export default class Users extends Component {
    render() {
        return (
            <div>
                {users.map((item)=>{
                    return (
                        <Urea fname={DataTransferItem.fname} lname={item.lname}/>
                    )
                })}
            </div>

        )
    }
}
