function Alert(x) {
  let { user } = x;
  return (
    <div onClick={() => alert(user.name)}>
      <h2>{user.username}</h2>
    </div>
  );
}
export default Alert;
