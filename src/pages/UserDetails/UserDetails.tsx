import * as S from "./styles";
import { useParams } from "react-router-dom";
import React from "react";
import { useQuery } from "react-query";
import { fetchUserDetails } from "../../utils/fetch/fetchUserDetails";

const UserDetails = () => {
  const { userId } = useParams();

  const {
    data: user,
    isLoading,
    isError,
  } = useQuery("user-details", () => fetchUserDetails(userId), {
    refetchOnMount: false,
    enabled: !!userId,
  });

  if (isLoading) {
    return <div>is loading</div>;
  }

  if (isError) {
    return <div>is error</div>;
  }

  const userDetails = user[0];

  if (!userDetails) {
    return <div>No user details found. Try another user.</div>;
  }

  const { email, username, phone, name, website, company, address } =
    userDetails;

  const { name: companyName, catchPhrase } = company;
  const { street, city, zipcode, suite } = address;

  return (
    <S.Wrapper>
      <S.SectionWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>Full name</S.FieldLabel>
          <S.FieldValue>{name}</S.FieldValue>
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>username</S.FieldLabel>
          <S.FieldValue>{username}</S.FieldValue>
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>email</S.FieldLabel>
          <S.FieldValue>{email}</S.FieldValue>
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>phone</S.FieldLabel>
          <S.FieldValue>{phone}</S.FieldValue>
        </S.FieldWrapper>

        <S.FieldWrapper>
          <S.FieldLabel>website</S.FieldLabel>
          <S.FieldValue>{website}</S.FieldValue>
        </S.FieldWrapper>
      </S.SectionWrapper>

      <S.Divider />
      <S.SectionWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>company Name</S.FieldLabel>
          <S.FieldValue>{companyName}</S.FieldValue>
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>Slogan</S.FieldLabel>
          <S.FieldValue>{catchPhrase}</S.FieldValue>
        </S.FieldWrapper>
      </S.SectionWrapper>

      <S.Divider />
      <S.SectionWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>Address</S.FieldLabel>
          <S.FieldValue>
            {suite}, {street}, {city}.
          </S.FieldValue>
        </S.FieldWrapper>
        <S.FieldWrapper>
          <S.FieldLabel>Zipcode</S.FieldLabel>
          <S.FieldValue>{zipcode}</S.FieldValue>
        </S.FieldWrapper>
      </S.SectionWrapper>
    </S.Wrapper>
  );
};

export default UserDetails;
