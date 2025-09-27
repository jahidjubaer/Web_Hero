export default function User({ user }) {
  const { name, phone, website } = user;

  return (
    <div className="card">
      <h4>Name: {name}</h4>
      <h5>phone : {phone}</h5>
      <p>Website : {website}</p>
    </div>
  );
}
