export function SetItemLocal(name, value) {
    localStorage.setItem(name, value);
  }
  
  export function GetItemLocal(name) {
    return localStorage.getItem(name);
  }