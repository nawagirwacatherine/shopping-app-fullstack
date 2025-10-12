 
 import { createContext, useState } from 'react';
import {products} from '../assets/assets';

 export const ShopContext = createContext();

 const ShopContextProvider = (props) => {
    
    const currency = '$';
    const delivery_fee = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false)


    const value = {
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch
    }  

    return (
        <ShopContext.Provider value={value}>
            {props.children}

        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider; 







// Good question — if your SearchBar component isn't showing up in the browser, even though it's rendered in your App.jsx, it's almost certainly due to showSearch being false.

// Let’s troubleshoot this step by step.

// 🧠 Step-by-Step Debug
// ✅ 1. Check if showSearch is true by default

// In your ShopContext file (probably ShopContext.jsx), you should have something like this:

// const [showSearch, setShowSearch] = useState(true); // 👈 This needs to be true


// If it's set to false, the SearchBar won't render because of this conditional in your SearchBar:

// return showSearch ? ( <div>...Search UI...</div> ) : null;


// ✅ Fix: Make sure showSearch is initialized to true.

// ✅ 2. Ensure ShopContextProvider wraps <App />

// For useContext(ShopContext) to work, your App component must be inside the <ShopContextProvider> — otherwise, search, setSearch, showSearch, etc., won't exist.

// Here’s how it should look in your main.jsx or index.jsx:

// // main.jsx or index.jsx
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import { BrowserRouter } from 'react-router-dom';
// import ShopContextProvider from './context/ShopContext'; // adjust path if needed

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ShopContextProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ShopContextProvider>
//   </React.StrictMode>
// );


// ✅ Fix: Make sure ShopContextProvider wraps your entire app in the root file.

// ✅ 3. Temporarily Add a Debug Log in SearchBar

// To see what’s going on, add this to SearchBar.jsx:

// console.log('Search:', search);
// console.log('showSearch:', showSearch);


// Then open the browser console and refresh the page. If showSearch is false, that's why nothing is rendered.

// ✅ 4. Test: Force it to Render

// Try replacing this line:

// return showSearch ? ( ... ) : null;


// With:

// return (
//   <div className='border-t border-b bg-gray-50 text-center'>
//     <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
//       <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'/>
//       <CiSearch className='w-4'/>
//     </div>
//     <IoClose onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' />
//   </div>
// )


// If it now shows up, the issue is definitely showSearch being false.

// ✅ Summary of Fixes
// ✅ Check this	🔍 What to look for
// showSearch in context	Must be true by default
// ShopContextProvider	Must wrap the entire app in your root file
// Console logs	Use console.log(showSearch) inside SearchBar to debug
// Bypass condition	Temporarily render SearchBar without the showSearch check to test rendering