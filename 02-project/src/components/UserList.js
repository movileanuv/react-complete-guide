function UserList(props) {
  return (
    <ul>
      {props.usersList.map((el, idx) => {
        return <li key={idx}>{el.name} {el.age}</li>
      })}
    </ul>
  )
}

export default UserList
