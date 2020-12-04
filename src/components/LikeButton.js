import React from 'react';


class LikeButton extends React.Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    addLike() {
        // this.setState({
        //     count: this.state.count + 1
        // })
        console.log('a')
        fetch('http://localhost:3000/api/v1/productsfdsfsdfds')
            .then(resp => {
                if (resp.ok) {
                    console.log('b')
                    return resp.json()
                } else {
                    throw new Error('there was an error')
                }
               
            })
            .then(products => console.log('c', products)
            )
            .catch(err => console.log('d', err))
            console.log('e')

            // a e b c 
            // a d e
    }



render() {
    return (
        <div className="like-button">
            <div className="like-count">
                {this.state.count}
            </div>
            <button onClick={this.addLike.bind(this)}>Like </button>

        </div>
    )
}

    }

export default LikeButton;