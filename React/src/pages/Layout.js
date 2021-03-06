import Navbar from "../components/Navbar/Navbar";

export default function Layout(props) {
  const user = props.user;

  return (
    <div>
      <Navbar user={user} />
      {props.children}
    </div>
  );
}
