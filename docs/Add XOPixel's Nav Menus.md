
## B. Add Maximillian Navigation bar  

 1. View the existing version, _u3
 
    - Open the App folder `./client/1c-html-custom-app`
    - Right-click on file, `index_u3.html`, and select Open with Live Server 
    - Debug it in VScode (Live Server must be running) 
      - Make sure `launch.json` will debug `index_u3.html` and `index_u4.html` versions
      - Open file, `index_u3.js` and put stops on line 14
      - Open file, `./assets/js/expanding-cards_u3.js` and put stops on lines 50 and 65 
      - Open Debug view, select `Debug 1c_u3-html-custom-app` and Press F5 
      - Click on the Continue icon in the Debugger bar 
      - With execution stopped on line 65, enter `aHTML` in the Debug Console
      - Click Continue 5 times, once for each Card. Inspect the variable, `aHTML`, as you wish
      - With execution stopped on line 50, enter `aHTML` to view entire Cards HTML code 
      - Press Continue for the last time <br><br>

 2. Create and/or modify a new version, _v4 <br><br>

    - Copy three files
      - `index_u3.html          index_u4.html`
      - `index_u3.js            index_u4.js`
      - `navigation-items_u3.js navigation-items_u4.js`  <br><br>
      
    - Create 2 new `.css` files
      - Copy `main.css` from Maximilian's Diving-Deeper chapter 
        - From: `client/0c-css-samples\m03-Diving-Deeper-into-CSS\diving-deeper-02-adding-the-header-starting-code/main.css`
        - To:   `client/1c-html-custom-app/assets/css/main-header-nav.css`
        - In the `.css` file, 
          - Replace all double `__` and `--` with single `_` and `-`   
          - Remove the first 30 lines relating to the `body`, `section` and `product` tags  <br><br>
      - Create a new `.css` files from XOPixel for the dropdown menu items    
        - As: `client/1c-html-custom-app/assets/css/nav-menu-items.css`  <br><br>
        
    - Modify the file, index_u4.html

      - Change main `.js` script to `_u4` version  
        `  <script type="module" src="index_u4.js"></script>` <br><br>

      - Comment out Brad's `.css` file reference and `HTML` code
        ```bash
          <!--<link rel="stylesheet" href="assets/css/animated-navigation.css" /> -->
          <!--<nav class="active" id="nav">
              ...
              </nav>
           -->  
        ```
      - Add Maximillian's `.css` file and `HTML` code
        ```bash
          <!-- maximillian's Code: -->
          <!--
             <link rel="stylesheet" href="assets/css/main-header-nav.css" />
          
              <header   class="main-header">
                <div>
                  <a    class="main-header_brand" href="index.html" >
                    FormR
                  </a>
                </div>
                <nav    class="main-nav">
                  <ul   class="main-nav_items">
                    <li class="main-nav_item"                  ><a href="#">Home</a></li>
                    <li class="main-nav_item"                  ><a href="#">FAQ</a></li>
                    <li class="main-nav_item"                  ><a href="#">Cards</a></li>
                    <li class="main-nav_item"                  ><a href="#">Contact</a></li>
                    <li class="main-nav_item main-nav_item-cta"><a href="#">Robin</a></li>
                  </ul>
                </nav>
              </header>
           -->  
        ```
      - Add XOPixel's `.css` file and `HTML` code
        ```bash 
          <!-- XO Perfect's Code: https://www.youtube.com/watch?v=rqaDGpffd2w-->

            <link rel="stylesheet" href="assets/css/nav-menu-items.css" />

                <nav>
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Cards</a></li>
                    <li    class="dropdown">
                        <a href="#" class="dropdown-btn">Dropdown</a>
                      <div class="dropdown-menu">
                        <a href="#">Link l</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                        <a href="#">Link 4</a>
                      </div>
                    </li>
                    <li><a href="#">Contact</a></li>
                    <li    class="main-nav_item main-nav_item-cta"><a href="#">Robin</a></li>
                  </ul>
                </nav>  
        ```
      
      

      
      