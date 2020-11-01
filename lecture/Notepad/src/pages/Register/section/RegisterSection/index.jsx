import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styled';
import RegisterForm from '../../organism/RegisterForm';
import { URL_GROUP } from 'configs/links/urls';

function RegisetrSection() {
  return (
    <S.RegisterContainer>
      <div className="logo-area">
        <Link to={URL_GROUP.HOME}>Notepad</Link>
      </div>
      <h3>회원가입</h3>
      <RegisterForm />
      <div className="nav-bar">
        <Link to={URL_GROUP.LOGIN}>로그인</Link>
      </div>
    </S.RegisterContainer>
  );
}

export default RegisetrSection;
