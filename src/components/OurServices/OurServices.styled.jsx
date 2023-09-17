import styled from "@emotion/styled";

export const OurServicesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ServiceCard = styled.div`
  display: flex;
  width: 250px;
  min-height: 215px;
  padding: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  border: 1px solid #dcd7c9;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 20px 50px;
  background-color: #a27b5c;
`;

export const getStyledServiceIcon = (component) => styled(component)`
  width: 100%;
  fill: #fff;
`;

export const ServiceIconWrapper = styled.div`
  width: 70px;
`;

export const ServiceTitle = styled.h2`
  text-align: center;
`;

export const ServiceText = styled.p`
  text-align: center;
`;
