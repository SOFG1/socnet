let paginator = (current, total)=> {
    const pages = [];
    if (total <= 10) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } 
    
    //&& total > 10
    else if (current < 9) {
      for (let i = 1; i < 10; i++) pages.push(i);
      pages.push(false);
      pages.push(total);
    } 
    
    
    //total > 100 && current >= 9
    else if (current > total - 8) {
      pages.push(1);
      pages.push(false);
      for (let i = total-8; i <= total; i++) pages.push(i);
    } 
    
    
    
    
    else {
      pages.push(1);
      pages.push(false);
      for (let i = current-3; i <= current + 3; i++) pages.push(i);
      pages.push(false);
      pages.push(total);
    }
    // Result
    return pages;
}

export default paginator