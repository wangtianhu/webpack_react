// import React from 'react';

// import { Route, BrowserRouter, Redirect, Link, Switch } from 'react-router-dom';

// import HomeIndex from './home';
// import Blogindex from './blog';
// import UserIndex from './user';
// import Detail from './detail';

// import Error from './error';
// class AppRouter extends React.Component {
//   render() {
//     return (
//       <BrowserRouter>
//         <ul>
//           <li>
//             <Link to='/home'>home</Link>
//           </li>
//           <li>
//             <Link to='/blog'>blog</Link>
//           </li>
//           <li>
//             <Link to='/user'>user</Link>
//           </li>
//         </ul>

//         {/* switch 只显示一个组件 加exact 标识精确匹配 如果不加 exact 也会匹配  */}

//         <div>
//           <Switch>
//             {/* exact  */}
//             <Redirect from='/user' to='/blog'></Redirect>
//             <Route path='/home' component={HomeIndex} />
//             <Route path='/user' component={UserIndex} />
//             <Route path='/blog' component={Blogindex} />
//             <Route path='/detail/:id' component={Detail} />
//             <Route component={Error}></Route>
//           </Switch>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// export default AppRouter;
