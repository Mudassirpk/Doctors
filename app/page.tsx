// components
import SearchBar from "@/components/Home/SearchBar";
import DoctorsGrid from "@/components/Home/DoctorsGrid";
import Divider from "@/components/ui/Divider";
export default function Home() {
  return (
    <main className="px-[10%] sm:px-[5%]">
      <SearchBar />
      <Divider thickness={1} space={20} />
      <DoctorsGrid />
    </main>
  );
}
