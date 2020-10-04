import React from "react";
import Users from "../components/Users";
import { connect } from "react-redux";
import { getUsers } from "../modules/users";
import { Preloader } from "../lib/PreloadContext";

const { useEffect } = React;

const UsersContainer = ({ users, getUsers }) => {
  useEffect(() => {
    if (users) return; // * 서버 사이드 렌더링을 할 때는 이미 있는 정보를 재요청하지 않게 처리하는 작업이 중요하다.
    // * 이 작업을 하지 않으면 서버 사이드 렌더링 후 브라우저에서 페이지를 확인할 때 이미 데이터를 가지고 있음에도 불구하고 불필요한 API를 호출하게 된다.
    getUsers();
  }, [getUsers, users]);
  return (
    <>
      <Users users={users} />
      <Preloader resolve={getUsers} />
    </>
  );
};

export default connect(
  (state) => ({
    users: state.users.users,
  }),
  {
    getUsers,
  }
)(UsersContainer);
