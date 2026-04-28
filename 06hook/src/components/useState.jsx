// useState 내부동작 이해하기!!!

let hooks = [];
let currentIndex = 0;

function useStste(initialValue){
  const index = currentIndex;

  if(hooks[index] === undefined){
    hooks[index] = initialValue;
  }

  function setState(newValue){
    hooks[index] = newValue;
    render(); // 다시 렌더링
  }

  currentIndex++;
  return [hooks[index], setState];
}



// 
function render(){}