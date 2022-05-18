   import   React from 'react'

// import './Toolbar.css'

   import   ToolbarItems            from './ToolbarItems.mjs';

///   var   ToolbarItems_onClick = ToolbarItems.onClick

//        console.log( ToolbarItems_onClick )
//--------------------------------------------------------
 
// const  toolbar = function( props ) { return (
// const  toolbar = props => (
function  Toolbar(  props ) {                          // props contains the property, drawerClickHandler
    
//  var onClick = ToolbarItems_onClick 
          
//  --------------------------------------------------
  
  return (

    <header  className="toolbar">
      <nav   className="toolbar_nav">
        <div className="toolbar_toggleButton">                             {/* hide on phones */}                                      
          {/* SideDrawer_ToggleButton } */}                                {/* passed from App.jsx */}
        </div>
        <div className="toolbar_logo"><a href="/">&nbsp;</a></div>         {/* &nbsp; is required */}

        <div className="toolbar_spacer"></div>                             {/* Ending tag is required */}

        <div className="toolbar_nav-items">
          <ul>
        {/* <li><a href="/" onclick="javascript:alert( 'Home clicked' )">Home</a></li> */}
            <li><a href="/" onClick={ e => ToolbarItems.onClick( e ) }>Home</a></li>
            <li><a href="/" onClick={ e => ToolbarItems.onClick( e ) }>Links</a></li>
            <li><a href="/" onClick={ e => ToolbarItems.onClick( e ) }>Cards</a></li>
            <li><a href="/" onClick={ e => ToolbarItems.onClick( e ) }>FAQs</a></li>
            <li id="cta" ><a href="/" >Sign In</a></li>
          </ul>
        </div>

      </nav>
    </header>

    ) // eos return( ... )   
//  --------------------------------------------------
  } // eof App
//--------------------------------------------------------

 export default Toolbar
