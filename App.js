// const Heading = React.createElement("h1",{ id:"Heading"},"This is Heading in React ")
// console.log(Heading)
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(Heading);

// <div id="parent">
  //  <div id="child">
    //    <h1>I am H1 Tag</h1>
      //  <h2>I am H2 Tag</h2>
   // </div>
//</div> 


const parentElement = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},React.createElement("h1",{},"I am H1 tag")),
    React.createElement("div",{id:"child2"},React.createElement("h2",{},"I am H2 tag")),
]
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parentElement)