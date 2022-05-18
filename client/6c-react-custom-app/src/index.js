   import   React        from 'react';
   import { createRoot } from 'react-dom/client';                         // .(20406.02.1 RAM Use new method in react-dom) 

   import                     './index.css';                              // .(20513.02.3 RAM Imported in indexx.html) 
   import   App          from './App.jsx';                                // .(20406.04.1 RAM Use complete file name, no magic please)

// import   ToolbarItems from './components/Toolbar/ToolbarItems.mjs';

// -------  -----------------   =  ---------------------------------- 

     const  root      =  createRoot( document.getElementById( 'root' ) ); // .(20406.02.3) 
                                                                          // .(20406.02.4).(20406.08.1 Error: Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.)
            root.render( <App /> )

//          ToolbarItems.setItems()

// -------  -----------------   =  ---------------------------------- 
