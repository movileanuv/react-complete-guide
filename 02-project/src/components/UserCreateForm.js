function UserCreateForm(props) {
  function handleFormSubmit(evt) {
    evt.preventDefault()
    const name = evt.target.name.value
    const age = evt.target.age.value

    if (name.trim().length === 0) {
      console.error("Name may not be empty")
      return
    }
    if (isNaN(age) || +age < 0) {
      console.error("Enter a valid age")
      return
    }
    props?.addUser(name, age)
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">User Name</label>
        <input type="text" id="name" name="name"/>
        <label htmlFor="age">Age (in years)</label>
        <input type="number" id="age" name="age"/>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UserCreateForm
