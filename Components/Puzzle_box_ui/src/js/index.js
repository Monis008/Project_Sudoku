const puzzleContainerEl = document.getElementById('puzzle-container');
let Selectedele = ''; 
function generateBoard() {
    puzzleContainerEl.innerHTML = '';
    for (let i = 0; i < 9; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-items');
            for (let j = 0; j < 9; j++) {
                const innerCell = document.createElement('div');
                innerCell.classList.add('inner-cell');
                
                gridItem.appendChild(innerCell);
            }
        puzzleContainerEl.appendChild(gridItem);
    }
}
generateBoard();
puzzleContainerEl.addEventListener('click', (event) => {
  const item = event.target.closest('.inner-cell');
  if (!item) return;
  const prevSelectedItem = puzzleContainerEl.querySelector('.inner-cell-active');
  if (prevSelectedItem) prevSelectedItem.classList.remove('inner-cell-active');
  item.classList.add('inner-cell-active');
  Selectedele = item; 
});
document.addEventListener('keydown' , (event)=>{
if(/^[1-9]$/.test(event.key)|| event.key==='Backspace'){
    if(!Selectedele.textContent || event.key==='Backspace'){
        if(event.key==='Backspace'){Selectedele.textContent = '';}
        else{
        Selectedele.textContent = event.key;}
    }
    }
})