



   import   App          from './App.mjs';
   import   ToolbarItems from './components/Toolbar/ToolbarItems.mjs'

// -------  -----------------   =  ---------------------------------- 

       var  pRoot = document.getElementById( 'root' )
        
            pRoot.innerHTML = App( )
 
       var  bDrawerOpen = true

            ToolbarItems.addListeners() 
//          SideDrawer_ToggleButton.addListerners() 
         
// -------  -----------------   =  ---------------------------------- 
 