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
* "ref"s to handle form input
* React actively runs the entire component function when it renders, so don't put in any long running commands, like an API fetch
* `useEffect` executes only when dependencies change
