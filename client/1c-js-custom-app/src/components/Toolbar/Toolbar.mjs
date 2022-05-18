



   import   ToolbarItems            from './ToolbarItems.mjs'

//--------------------------------------------------------

// const toolbar = function( props ) { return (
// const toolbar = props => (
function Toolbar(  props ) { 

//  --------------------------------------------------

  return removeOnClicks(
`
    <header  class    ="toolbar">
      <nav   class    ="toolbar_nav">
        <div>
          <!-- SideDrawer.ToggleButton -->
        </div>
        <div class    ="toolbar_logo"><a href="/">&nbsp;</a></div>  <!-- &nbsp; is required -->

        <div class    ="toolbar_spacer"></div>                      <!-- Ending tag is required -->

        <div class    ="toolbar_nav-items">
          <ul>
            <li><a href="/" onclick="ToolbarItems.onClick">Home</a></li>
            <li><a href="/" onclick="ToolbarItems.onClick">Links</a></li>
            <li><a href="/" onclick="ToolbarItems.onClick">Cards</a></li>
            <li><a href="/" onclick="ToolbarItems.onClick">FAQs</a></li>
            <li id="cta" ><a href="/" >Sign In</a></li>
          </ul>
        </div>
        <script>
          ToolbarItems = { }
          ToolbarItems.onClick = function() { alert("Clicked Item"); return false }
        </script>  
      </nav>
    </header>
`
//  ).replace( /ToolbarItems.onClick/, '' ) // eos return( ... )   
    ) // eos return( ... )   
//  --------------------------------------------------
  } // eof App
//--------------------------------------------------------

export default Toolbar;

// console.log( Toolbar( ) )

function removeOnClicks( aHTML ) { 
//  aHTML = aHTML.replace( /ToolbarItems.onClick/, '' )
    return  aHTML 
    }

    