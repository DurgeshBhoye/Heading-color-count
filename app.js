



// writting components as class
const Box = (props) => {
  return (
    <div className='box'>
      <h1 className={props.color}>{props.heading}</h1>
      <p>This is a test paragraph which is created by React.{98 + 2} This paragraph has no attribute and is contained inside a div which is also created by React.</p>
      <div className="btn">
        <p onClick={() => props.changeColor(props.id, "red")}><button>Red</button></p>
        <p onClick={() => props.changeColor(props.id, "yellow")}><button>Yellow</button></p>
        <p onClick={() => props.changeColor(props.id, "blue")}><button>Blue</button></p>
        <p onClick={() => props.changeColor(props.id, "green")}><button>Green</button></p>
      </div>
    </div>
  );
};

const Stats = (props) => {
  let boxes = props.boxes;
  let black_count = 0, red_count = 0, yellow_count = 0, blue_count = 0, green_count = 0;
  boxes.forEach(box => {
    if (box.color == "black") {
      black_count++;
    }
    else if (box.color == "red") {
      red_count++;
    }
    else if (box.color == "yellow") {
      yellow_count++;
    }
    else if (box.color == "blue") {
      blue_count++;
    }
    else if (box.color == "green") {
      green_count++;
    }
  });

  return (
    <div className="stats">
      Total Heading color count:
      <div>Black: {black_count}</div>
      <div>Red: {red_count}</div>
      <div>Yellow: {yellow_count}</div>
      <div>Blue: {blue_count}</div>
      <div>Green: {green_count}</div>
    </div>
  )
}


class App extends React.Component {
  state = {
      boxes: [
          {
              id: 1,
              heading: "First Heading",
              color: "black"
          },
          {
              id: 2,
              heading: "Second Heading",
              color: "black"
          },
          {
              id: 3,
              heading: "Third Heading",
              color: "black"
          },
          {
              id: 4,
              heading: "Fourth Heading",
              color: "black"
          },
          {
              id: 5,
              heading: "Fifth Heading",
              color: "black"
          },
          {
              id: 6,
              heading: "Sixth Heading",
              color: "black"
          },
          {
            id: 7,
            heading: "Seventh Heading",
            color: "black"
        },
      ]
  };

  changeColor(id, color) {
    let boxes = this.state.boxes;
    boxes[id - 1].color = color;
    this.setState({
      boxes: boxes
    });
  }



  render() {
    return (
      <div>
        <div className='row'>
          {this.state.boxes.map(box =>
            <div className='col'>
              <Box
                id={box.id}
                heading={box.heading}
                color={box.color}
                changeColor={this.changeColor.bind(this)}
              />
            </div>
          )}
        </div>
        <div className='row'>
          <Stats boxes={this.state.boxes} />
        </div>
      </div>
    );
  };
}

ReactDOM.render(
  <App />,           // calling function to execute

  document.getElementById('react-container')  // this is for above code
);

const myp = (<p> three plus two is {3 + 2}</p>);
