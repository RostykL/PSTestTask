import * as S from "./styles";
import { useLoaderData } from "react-router-dom";
import React from "react";
import { IUser } from "../../types/user";
import PageSuspense from "../../components/PageSuspense";

const UserDetails = () => {
  const { user } = useLoaderData() as { user: IUser[] };

  return (
    <PageSuspense resolve={user}>
      {(userData) => {
        const userDetails = userData[0];

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
      }}
    </PageSuspense>
  );
};

export default UserDetails;
