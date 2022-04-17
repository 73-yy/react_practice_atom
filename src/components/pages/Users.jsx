import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
//
export const Users = () => {
  const users = [...Array(10).keys()].map((val) => {
    return {
      id: { val },
      name: `jake-${val}`,
      image: "https://source.unsplash.com/NE0XGVKTmcA",
      email: "12345@example.com",
      phone: "000-9999-9999",
      company: {
        name: "テスト株式会社"
      },
      website: "httts://google.com"
    };
  });

  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SUserArea>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} />;
        })}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
