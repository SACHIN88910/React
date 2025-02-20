const element = React.createElement("h1",{id:"first",className:"rahul",style:{backgroundColor:"blue"}},"Hello Coder Army");
const element2 = React.createElement("h1",{id:"first",className:"rahul",style:{backgroundColor:"black",color:"white"}},"age tum picha ma");

// ReactDOM.render(element,document.getElementById('root'));
// element : 50 card pade hue hai
 const div1=React.createElement('div',{},[element,element2]);
// 
// 
const Reactroot = ReactDOM.createRoot(document.getElementById('root'));
// // React root container: is
// Reactroot.render(element);
//Reactroot.render(element2);
Reactroot.render(div1);






