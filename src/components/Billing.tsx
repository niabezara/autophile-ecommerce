import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import Payment from "./Payment";

interface IFormInput {
  firstName: string;
  email: string;
  phone: number;
  address: number | string;
  ZIP: number;
  city: string;
  Country: string;
}

export default function Billing() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data: any) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <BillSection>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "700",
            color: "#D87D4A",
            textTransform: "uppercase",
          }}
        >
          billing details
        </p>
        <Section>
          <Article>
            <label>Name</label>
            {errors.firstName && <p>{errors.firstName.message}</p>}
          </Article>
          <input
            placeholder="Alexei Ward"
            {...register("firstName", {
              required: "Field cannot be empty",
            })}
          />
        </Section>
        <Section>
          <Article>
            <label>Email Address</label>
            {errors.email && <p>{errors.email.message}</p>}
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
            {errors.phone && <p>{errors.phone.message}</p>}
          </Article>
          <input
            type="number"
            placeholder="+1 202-555-0136"
            {...register("phone", {
              valueAsNumber: true,
              required: "Field cannot be empty",
            })}
          />
        </Section>
      </BillSection>
      <ShippingSection>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "700",
            color: "#D87D4A",
            textTransform: "uppercase",
          }}
        >
          shipping info
        </p>
        <Section>
          <Article>
            <label>Your Address</label>
            {errors.address && <p>{errors.address.message}</p>}
          </Article>
          <input
            placeholder="1137 Williams Avenue"
            {...register("address", {
              required: "Field cannot be empty",
            })}
          />
        </Section>
        <Section>
          <Article>
            <label>ZIP Code</label>
            {errors.ZIP && <p>{errors.ZIP.message}</p>}
          </Article>
          <input
            placeholder="10001"
            {...register("ZIP", {
              required: "Field cannot be empty",
              pattern: {
                value: /^[0-9]+$/,
                message: "Wrong format",
              },
            })}
          />
        </Section>
        <Section>
          <Article>
            <label>City</label>
            {errors.city && <p>{errors.city.message}</p>}
          </Article>
          <input
            placeholder="New York"
            {...register("city", {
              required: "Field cannot be empty",
            })}
          />
        </Section>
        <Section>
          <Article>
            <label>Country</label>
            {errors.Country && <p>{errors.Country.message}</p>}
          </Article>
          <input
            placeholder="United States"
            {...register("Country", {
              required: "Field cannot be empty",
            })}
          />
        </Section>
      </ShippingSection>
      <div>
        <p
          style={{
            fontSize: "13px",
            fontWeight: "700",
            color: "#D87D4A",
            textTransform: "uppercase",
          }}
        >
          payment details
        </p>
        <Payment />
      </div>
      <button type="submit">Continue</button>
    </form>
  );
}

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
    font-size: 14px;
    font-weight: 700;
    letter-spacing: -0.25px;
    border-width: 1px;
    border-image: initial;
    opacity: 0.4;
    background: inherit;
    &:focus {
      border: 1px solid #d87d4a;
    }
  }
`;
const Article = styled.div`
  display: flex;
  justify-content: space-between;
  label {
    color: #000;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.214px;
    margin-bottom: 9px;
  }
  p {
    color: #cd2c2c;
    font-size: 12px;
    font-weight: 500;
    letter-spacing: -0.214px;
  }
`;

const BillSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
`;
const ShippingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 2.4rem;
`;
