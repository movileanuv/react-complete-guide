# react-complete-guide
Projects for Udemy course "React - The Complete Guide"

## Learnings

* `npx create-react-app <app name>` creates a new React app
* for some reason, `formData` is empty:
  ```html
  <form>
      <label for="name"></label>
      <input type="text" id="name" name="name">
      <button>Submit</button>
  </form>
  
  <script>
      function handleSubmit(evt) {
        evt.preventDefault()
        const formData = new FormData(evt.target)
        console.log(formData)  //  <---- empty??
      }
      const form = document.querySelector("form")
      form.addEventListener("submit", handleSubmit)
  </script>
  ```
  `formData.get("name")` works though ;). Expected to see a fancier output
* `ReactDOM.createProtal` to create modals
* "ref"s to handle form input.
  The return value of `useRef()` is an object with the key current, which later holds the HTMLElement as value
* React actively runs the entire component function when it renders, so don't put in any long running commands, like an API fetch
* `useEffect(callback, [...])` executes only when dependencies specified in the list change,
  only once when it is an empty list `[]`,
  or every time if no second argument is provided.
* The return value of the `useEffect` callback function is executed only the second time the useEffect is triggered
* `useReducer` is used when more complex state transitions occur, that are too complex to handle with `useState`
* React Context is not optimized for high frequency state changes
