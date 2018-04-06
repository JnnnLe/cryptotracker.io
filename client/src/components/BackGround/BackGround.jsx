import React from 'react';
import fetch from 'isomorphic-fetch';

class BackGround extends React.Component {
        /*constructor(props) {
            super(props);
            this.state = {
                userName= "";
            }
        }*/

        componentDidMount() {
            fetch('/api/currentUser')
                .then((result) => result.json()).
                then((findResponse) =>{
                    console.log("findResponse",findResponse)
                })


                }

                
            render() {
                return ( 
                    <div>
                	<p> hey </p>
                    <p>{this.userData()}</p>
                    </div>
                )
            }

 }


        export default BackGround;
