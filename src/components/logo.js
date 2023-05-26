/** @jsx jsx */
import { jsx, Heading } from "theme-ui";
import { Link } from "components/link";

export default function Logo({ color, ...rest }) {
  return (
    <Link
      path="/"
      sx={{
        display: "flex",
        cursor: "pointer",
        mr: 15,
        textDecoration: "none",
      }}
      {...rest}
    >
      <Heading
        as="h1"
        sx={
          color ? { varian: "links.logoDark" } : { variant: "links.logoWhite" }
        }
      >
        REMEVENMX
      </Heading>
    </Link>
  );
}
