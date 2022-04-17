import { PrimaryButton } from "./components/atoms/buttton/PrimaryButton";
import { SecondaryButton } from "./components/atoms/buttton/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

const user = {
  name: "jake",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@example.com",
  phone: "000-9999-9999",
  company: {
    name: "テスト株式会社"
  },
  website: "httts://google.com"
};

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}
