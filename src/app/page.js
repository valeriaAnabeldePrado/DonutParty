import LoaderMio from "@/components/loader/loader";
import "../components/style.css";
import HomeYEscena from "@/components/homeYEscena";

export default function Home() {
  return (
    <LoaderMio>
      <main className="container-main">
        <HomeYEscena />
      </main>
    </LoaderMio>
  );
}
