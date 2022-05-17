import {Component} from "react";
export class Slider extends Component {

    constructor(props) {
      // console.log(props)
        super(props);
        this.state = {
            'images': [
              "logo192.png",
              "img1.webp",
              "sun-rise.jpg",
              "pic.jpg",
              "pic2.jpg",
            ],
            'index': 0,
            'selectedImage': "img1.webp",
            'intervalId': 0
        }
    }

    render() {

        return (
            <div>
                <img width="400px" height="400px" altt="slide show image" id="slideShow" alt="img"
                     src={this.state.selectedImage}/>
                <div>
                    <input type={"button"} value="Prev" onClick={(event) => {
                      this.setState.index = this.state.index > 0 ? --this.state.index : this.state.images.length - 1;
                      this.setState({
                        selectedImage: this.state.images[this.state.index]
                      });
                    }}/>
                    <input type={"button"} value="Next" onClick={(event) => {
                        // this.state.index = this.state.index < this.state.images.length - 1 ? ++this.state.index : 0;
                        this.setState({
                            index:this.state.index < this.state.images.length - 1 ? ++this.state.index : 0
                        }); 
                        this.setState({
                            selectedImage: this.state.images[this.state.index]
                        });
                    }}/>
                    <input type={"button"} value="Play" onClick={(event) => {
                        let id = setInterval(() => {
                            this.state.index = this.state.index > 0 ? --(this.state.index) : this.state.images.length - 1;
                            this.setState({selectedImage: this.state.images[this.state.index]})
                            this.setState({intervalId: id});
                        }, 1000);
                    }}/>
                    <input type={"button"} value="Stop" onClick={(event) => {
                        console.log(this.state.intervalId);
                        clearInterval(this.state.intervalId);
                    }}/>
                </div>

            </div>
        )
    }
}