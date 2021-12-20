// // import AnotherPortal from './AnotherPortal';
// import './App.css';
// import ClickCounter from './HOComponent/ClickCounter';
// import CounterRenderProp from './HOComponent/CounterRenderProp';
// import HoverCounter from './HOComponent/HoverCounter';
// // import ClickCounter from './HOComponent/ClickCounter2';
// // import ErrorBoundry from './ErrorBoundry';
// // import FRParentInput from './forwordref/FRParentInput';
// // import Hero from './Hero';
// // import HoverCounter from './HOComponent/HoverCounter2';
// // import HoverCounter2 from './HOComponent/HoverCounter2';
// // import ClickCounter2 from './HOComponent/ClickCounter2';
// // import ParentComponent from './purecomponent/ParentComponent';
// // import RefsDemo from './purecomponent/RefsDemo';
// // import Form from './component/Form';
// // import LifeCycleA from './component/LifeCycleA';
// // import NameList from './component/NameList';
// // import UserGreeting from './component/UserGreeting';
// // import ParentComponent from './component/ParentComponent';
// // import PropsEx from './component/PropsEx'
// // import StateEx from './component/StateEx'
// // import SetStateEx11 from './component/SetStateEx11'
// // import ClassClick from './component/ClassClick'
// // import FunClick from './component/FunClick';

// function App() {
//   return (
//     <div className="App">
//       {/* <PropsEx name="Dhiraj" heroName="Superman">children data </PropsEx>
//       <PropsEx name="Suraj" heroName="Batman"><button>Action</button></PropsEx>
//       <PropsEx name="Miraj" heroName="Ironman"/> */}
//       {/* <StateEx /> */}
//       {/* <SetStateEx11 /> */}
//       {/* <ClassClick />
//       <FunClick /> */}
//       {/* <ParentComponent /> */}
//       {/* <UserGreeting /> */}
//       {/* <NameList />  */}
//       {/* <Form /> */}
//       {/* <LifeCycleA /> */}
//       {/* <ParentComponent/> */}
//       {/* <RefsDemo /> */}
//       {/* <FRParentInput /> */}
//       {/* <AnotherPortal /> */}
//       {/* <ErrorBoundry>
//         <Hero name="Superman"/>
//         <Hero name="Batman"/>
//         <Hero name="joker"/>
//       </ErrorBoundry> */}
//       {/* <ClickCounter name="Dhiraj" />
//       <HoverCounter name="Dhiraj"/> */}
//       <CounterRenderProp render={(count, incrementCount) => { 
//         <CounterRenderProp count={count} incrementCount={incrementCount} 
//     }}
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import ClickCounter from './HOComponent/ClickCounter'
import CounterRenderProp from './HOComponent/CounterRenderProp'
import HoverCounter from './HOComponent/HoverCounter'

class App extends Component {

  render() {
    return (
      <div className="App">
        <CounterRenderProp>
        {(count, incrementCount) => ( 
           <ClickCounter count={count} incrementCount={incrementCount} />
           )}
        </CounterRenderProp>
        <CounterRenderProp>
        {(count, incrementCount) => ( 
           <HoverCounter count={count} incrementCount={incrementCount} />
           )}
        </CounterRenderProp>
     </div>
    )
        }
}

export default App
