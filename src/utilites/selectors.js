import { createSelector } from 'reselect'

export let getCurrent = state => state.users.currentPage

export let getTotal = state => state.users.numberOfPages;

export let getPages = createSelector(getCurrent, getTotal, (current, total)=> {
    const pages = [];
    // Normal 52
    if (total < 11) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else if (current < 9) {
      for (let i = 1; i <= 9; i++) pages.push(i);
      pages.push(false);
      pages.push(total);
    } else if (current > total - 8) {
      pages.push(1);
      pages.push(false);
      for (let i = total-8; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      pages.push(false);
      for (let i = current-3; i <= current + 3; i++) pages.push(i);
      pages.push(false);
      pages.push(total);
    }
    // Result
    return pages;
})