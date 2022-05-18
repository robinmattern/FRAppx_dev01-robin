   import   React, { Component } from 'react';

   import   Toolbar      from './components/Toolbar/Toolbar.jsx';

//--------- ---------------  =  --------------------------------------------------------  

// const Add = function( )     { // render( ) { return {
//nction App extends Component ( // render( ) { return {
   class App extends Component {

//  ------- ---------------  =  ------------------------------------  

//function render( )    { ... }   
//render         ( )    { ... }    // class method 
  render       = ( ) => {          // class method 

    return (

      <div style={ { height: '100%' } }>

        <Toolbar />

        <main style={ { marginTop: '64px' } }>
          <p>This is the page content!</p>
        </main>
      </div>

      ) // eos return( ... )
//  ------- ---------------  =  ----------------
    } // eom render
//  ------- ---------------  =  ------------------------------------  
  } // eoc App
//--------- ---------------  =  --------------------------------------------------------  

 export default App;

