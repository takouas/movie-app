import React, { Component } from 'react'

export default class modification extends Component {


    render() {
        return (
            <div>
                <input type="text" class="form-control " ref="userInput" name='title' placeholder="title" aria-describedby="basic-addon1" required ></input>

                <div class="input-group mb-3">

                    <input type="text" class="form-control " ref="userInput" name='image' placeholder="url image" aria-describedby="basic-addon1" required ></input>
                </div>
                <div class="input-group mb-3">

                    <input type="text" class="form-control " ref="userInput" name='description' placeholder=" description" aria-describedby="basic-addon1" required ></input>
                </div>
                <div class="input-group mb-3">

                    <input type="text" class="form-control " ref="userInput" name='rating' placeholder="rating" aria-describedby="basic-addon1" required ></input>
                </div>
            </div>
        )
    }
}
