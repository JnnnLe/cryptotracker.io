export const getUserStuff = () => {
  return fetch('/getUser',{credentials:'include'})
  .then((resp) => resp.json())
}