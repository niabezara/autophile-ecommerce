import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: string;
  email: string;
  phone: number;
  gender: GenderEnum;
}

export default function Billing() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: any) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <p>billing details</p>
      <Section>
        <Article>
          <label>Name</label>
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </Article>
        <input
          placeholder="Alexei Ward"
          {...register("firstName", {
            required: "Field cannot be empty",
            pattern: /^[A-Za-z]+$/i,
          })}
        />
      </Section>
      <Section>
        <Article>
          <label>Email Address</label>
          {errors.firstName && <p>{errors.email?.message}</p>}
        </Article>
        <input
          placeholder="alexei@mail.com"
          {...register("email", {
            required: "Field cannot be empty",
            pattern: {
              value:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Looks like this is not an email",
            },
          })}
        />
      </Section>
      <Section>
        <Article>
          <label>Phone Number</label>
          {errors.phone && <p>{errors.phone?.message}</p>}
        </Article>
        <input
          placeholder="+1 202-555-0136"
          {...register("phone", { required: "Field cannot be empty" })}
        />
      </Section>

      <button type="submit">Continue</button>
    </Form>
  );
}

const Form = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  grid-template-columns: 1fr;
`;
const Section = styled.div`
  input {
    width: 100%;
    min-width: 0px;
    outline: transparent solid 2px;
    outline-offset: 2px;
    position: relative;
    appearance: none;
    transition: all 0.2s ease 0s;
    border: 1px solid #cfcfcf;
    border-radius: 0.5rem;
    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 0.875rem;
    border-width: 1px;
    border-image: initial;
    background: inherit;
    &:focus {
      border: 1px solid #d87d4a;
    }
  }
`;
const Article = styled.div`
  display: flex;
  justify-content: space-between;
`;
