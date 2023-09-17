import { Container } from "../Container/Container";
import {
  OurServicesWrapper,
  ServiceCard,
  ServiceIconWrapper,
  ServiceText,
  ServiceTitle,
  getStyledServiceIcon,
} from "./OurServices.styled";
import { ReactComponent as Assistance } from "../../images/Assistance.svg";
import { ReactComponent as Insurance } from "../../images/Insurance.svg";
import { ReactComponent as Delivery } from "../../images/Delivery.svg";
import { ReactComponent as Condition } from "../../images/Condition.svg";

const StyledAssistanceIcon = getStyledServiceIcon(Assistance);
const StyledInsuranceIcon = getStyledServiceIcon(Insurance);
const StyledDeliveryIcon = getStyledServiceIcon(Delivery);
const StyledConditionIcon = getStyledServiceIcon(Condition);

export const OurServices = () => {
  return (
    <Container>
      <OurServicesWrapper>
        <ServiceCard>
          <ServiceIconWrapper>
            <StyledAssistanceIcon />
          </ServiceIconWrapper>
          <ServiceTitle>Assistance</ServiceTitle>
          <ServiceText>Support on the road 24/7</ServiceText>
        </ServiceCard>
        <ServiceCard>
          <ServiceIconWrapper>
            <StyledInsuranceIcon />
          </ServiceIconWrapper>
          <ServiceTitle>Full insurance</ServiceTitle>
          <ServiceText>All cars are insured</ServiceText>
        </ServiceCard>
        <ServiceCard>
          <ServiceIconWrapper>
            <StyledDeliveryIcon />
          </ServiceIconWrapper>
          <ServiceTitle>Free delivery to the customer</ServiceTitle>
          <ServiceText>When renting for more than 3 days</ServiceText>
        </ServiceCard>
        <ServiceCard>
          <ServiceIconWrapper>
            <StyledConditionIcon />
          </ServiceIconWrapper>
          <ServiceTitle>All cars in good condition</ServiceTitle>
          <ServiceText>Our cars are regularly serviced</ServiceText>
        </ServiceCard>
      </OurServicesWrapper>
    </Container>
  );
};
