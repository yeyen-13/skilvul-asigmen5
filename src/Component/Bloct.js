import { useParams } from "react-router";

function Bloct() {
  let { NotFound404 } = useParams();
  return <h1>NotFound404</h1>;
}
export default Bloct;
