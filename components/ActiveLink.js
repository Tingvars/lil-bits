import { useRouter } from "next/router";
import { Link } from "next/link";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const style = {
    marginRight: 10,
    color: router.asPath === href ? "red" : "black",
  };

  return (
    <Link href={href} style={style}>
      {children}
    </Link>
  );
}

export default ActiveLink;
