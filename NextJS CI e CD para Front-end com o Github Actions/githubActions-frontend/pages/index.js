import NextLink from "next/link"

export default function HomeScreen() {
  return (
    <div>
      <h1>Página inicial [nova alteração!]</h1>
      <NextLink href="/sobre" legacyBehavior>
        <a>Ir para a sobre</a>
      </NextLink>
    </div>
  );
}
