import { ConnectWallet } from "@thirdweb-dev/react";
import { Home, Profile, CreateCampaign, CampaignDetails } from "./pages";
import { Sidebar, Navbar } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { thirdweb, logo } from "./assets";

import "./index.css";
// import "./styles/Home.css";

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <BrowserRouter>
          <Sidebar />
        </BrowserRouter>
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/create-campaign" element={<CreateCampaign />} />
            <Route path="/campaign-details" element={<CampaignDetails />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

// const App = ()=> {
//   return (
//     <main className="main">
//       <div className="container">
//         <div className="header">
//           <h1 className="title">
//             Welcome to{" "}
//             <span className="gradient-text-0">
//               <a
//                 href="https://thirdweb.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 thirdweb.
//               </a>
//             </span>
//           </h1>

//           <p className="description">
//             Get started by configuring your desired network in{" "}
//             <code className="code">src/index.js</code>, then modify the{" "}
//             <code className="code">src/App.js</code> file!
//           </p>

//           <div className="connect">
//             <ConnectWallet
//               dropdownPosition={{
//                 side: "bottom",
//                 align: "center",
//               }}
//             />
//           </div>
//         </div>

//         <div className="flex-1">
//           <Sidebar />
//           <img src={Logo}/>
//         </div>

//         <div className="flex">
//           <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Home />} />
//           </Routes>
//           </BrowserRouter>
//         </div>

//         {/* <div className="grid">
//           <a
//             href="https://portal.thirdweb.com/"
//             className="card"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="/images/portal-preview.png"
//               alt="Placeholder preview of starter"
//             />
//             <div className="card-text">
//               <h2 className="gradient-text-1">Portal ➜</h2>
//               <p>
//                 Guides, references, and resources that will help you build with
//                 thirdweb.
//               </p>
//             </div>
//           </a>

//           <a
//             href="https://thirdweb.com/dashboard"
//             className="card"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="/images/dashboard-preview.png"
//               alt="Placeholder preview of starter"
//             />
//             <div className="card-text">
//               <h2 className="gradient-text-2">Dashboard ➜</h2>
//               <p>
//                 Deploy, configure, and manage your smart contracts from the
//                 dashboard.
//               </p>
//             </div>
//           </a>

//           <a
//             href="https://thirdweb.com/templates"
//             className="card"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="/images/templates-preview.png"
//               alt="Placeholder preview of templates"
//             />
//             <div className="card-text">
//               <h2 className="gradient-text-3">Templates ➜</h2>
//               <p>
//                 Discover and clone template projects showcasing thirdweb
//                 features.
//               </p>
//             </div>
//           </a>
//         </div> */}
//       </div>
//     </main>
//   );
// }

export default App;
