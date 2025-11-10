const User = () => {
  const handleUser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const newUser = { name, email };
    console.log(newUser);

    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data insert successfully ", data)
        if(data.insertedId) {
            alert("user added successfully"); 
        }
      });
  };
  return (
    <div>
      <form onSubmit={handleUser}>
        <input type="text" name="name" /> <br />
        <input type="text" name="email" /> <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default User;
