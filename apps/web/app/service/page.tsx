"use client";

import React from "react";

import {
  IconBox,
  IconEmail,
  IconExchanges,
  IconLock,
  IconMessage,
  IconPersonOutline,
  IconPhone,
} from "@components/Icons";

import { Layout } from "@layout";

import { faqList } from "@helpers/faqList";

import {
  CardText,
  CardsCol,
  HelpCardContainer,
  CardsRow,
  ContactCard,
  ContactCardContainer,
  ContactContent,
  ContactHeader,
  ContactSubTitle,
  ContactTitle,
  Container,
  HelpCard,
  HelpContent,
  FaqCard,
  FaqCardText,
  FaqCardTitle,
  FaqContent,
  FaqHeader,
  FaqTitle,
  ContactCardTitle,
  ContactCardText,
  Header,
  SubTitle,
  Title,
} from "./styles";

export default function Service() {
  return (
    <Layout>
      <Container>
        <HelpContent>
          <Header>
            <SubTitle>Atendimento</SubTitle>
            <Title>Central de ajudas</Title>
          </Header>
          <HelpCardContainer>
            <HelpCard>
              <IconBox />
              <CardText>Meus pedidos</CardText>
            </HelpCard>
            <HelpCard>
              <IconExchanges />
              <CardText>Trocas e cancelamento</CardText>
            </HelpCard>
            <HelpCard>
              <IconPersonOutline />
              <CardText>Meu cadastro</CardText>
            </HelpCard>
            <HelpCard>
              <IconLock />
              <CardText>Segurança e privacidade</CardText>
            </HelpCard>
          </HelpCardContainer>
        </HelpContent>
        <FaqContent>
          <FaqHeader>
            <FaqTitle>Perguntas frequentes</FaqTitle>
          </FaqHeader>
          <CardsRow gutter={[40, 40]}>
            {faqList.map((list) => (
              <CardsCol
                xxl={8}
                xl={8}
                lg={12}
                md={12}
                sm={12}
                xs={24}
                key={list.id}
              >
                <FaqCard>
                  <FaqCardTitle>{list.title}</FaqCardTitle>
                  {list.questions.map((question, index) => (
                    <FaqCardText key={index}>{question}</FaqCardText>
                  ))}
                </FaqCard>
              </CardsCol>
            ))}
          </CardsRow>
        </FaqContent>
        <ContactContent>
          <ContactHeader>
            <ContactTitle>Entre em contato</ContactTitle>
            <ContactSubTitle>
              Nossa equipe está disponível de segunda a sábado das 08h às 20h,
              exceto feriados.
            </ContactSubTitle>
          </ContactHeader>
          <ContactCardContainer>
            <ContactCard>
              <IconEmail />
              <ContactCardTitle>E-mail</ContactCardTitle>
              <ContactCardText>
                Envie uma mensagem para o nosso time de atendimento.
              </ContactCardText>
            </ContactCard>
            <ContactCard>
              <IconMessage />
              <ContactCardTitle>Assistente virtual</ContactCardTitle>
              <ContactCardText>
                Tire dúvidas, consulte seus pedidos e veja o status do
                atendimento.
              </ContactCardText>
            </ContactCard>
            <ContactCard>
              <IconPhone />
              <ContactCardTitle>(11) 11111-1111</ContactCardTitle>
              <ContactCardText>
                Faça uma ligação para o nosso time de atendimento.
              </ContactCardText>
            </ContactCard>
          </ContactCardContainer>
        </ContactContent>
      </Container>
    </Layout>
  );
}
