
## A. How to keep up with my changes

 1. Delete, clone, recreate local Dev repository from FRApps master repository -- not practical
    - When accepted changes are pushed to `https://github.com/8020data/FRApps_prod-master`  <br><br>

 2. View commits in Robin's (or other student's) Dev github repository
    - Goto `https://github.com/robinmattern/FRApps_dev02-robin`
    - I make lots of minor changes -- so it's hard to stay in sync

    - Browse through code hierarchy looking at dates
      - `client / 1c-html-custom-app / assets / js /`  <br>
         `expanding-cards_u3.js -- Made expanding-cards data driven in u3 -- 14 hours ago`

    - Click on `73` commits under the green Code button
      - Click on commit message: `Made expanding-cards data driven in u3`
      - Collapse changes for each file
      - Click on `4 changed files` to see clickable list with "bar chart" of changes
      - Click on file: `client/1c-html-custom-app/assets/css/expanding-cards.css`
        - Expand / collapse changes
        - Toggle full page / changes only view
      - Click on `client/1c-html-custom-app/assets/cssexpanding-cards_u3.js`
        - Scroll through changes
          - old lines on the left
          - new lines on the right
        - View file, copy raw contents, paste it into your dev repository  <br><br>

 3. View Robin's changes in cloned repository
    - Clone the remote Dev repository into `/c/Repos/FRApps_/dev01-robin`:
      ```html
      $ cd /c/Repos
      $ git clone https://github.com/robinmattern/FRApps_dev02-robin.git  FRApps_/dev01-robin
      $ cd FRApps_/dev01-robin
      $ code code FRApps.code-workspace
      ```
    - Open Source Control view -> Commits
      - Click on Commit message: `Made expanding-cards data driven in u3`
        - Click on file: `client/1c-html-custom-app/assets/css/expanding-cards.css`
            - old lines on the left, changes in red
            - new lines on the right, changes in green
        - Click on `client/1c-html-custom-app/assets/js/expanding-cards_u3.js`
          - Click on Open File icon
          - Open File Explorer view
          - Select menu: File -> Save As -> `C:\Repos\FRApps\client\1c-html-custom-app\assets\js\`  <br><br>

 4. Use WinMerge to compare and copy changes to the Student's Dev repository
    - Select two Repos folders to compare
      - In Windows File Explorer, right-click on `C:\Repos\FRApps_/dev01-robin`
      - Select WinMerge to open the program
      - In WinMerge, enter name of your Dev repository folder: `C:\Repos\FRApps`
    - Browse through code hierarchy looking at red explamation for changed folders
      - `client / 1c-html-custom-app / assets`

    - Copy individual lines between changed files
      - Double-click on file name, `css/expanding-cards.css`, to view changes
        - 1st repo (Robin's) lines on the left
        - 2nd Repo (Student's) lines on the right
      - Click the arrow pointing to then right to copy changes
        - from Robin's file on the left
        - to Student's file on the right

    - Copy entire file between folders
      - Select file name, `js/expanding-cards.js`
      - Click the arrow pointing to then right to copy changes




