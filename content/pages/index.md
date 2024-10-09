---
type: PageLayout
title: Lucca Rosa
colors: colors-a
sections:
  - elementId: ''
    colors: colors-f
    backgroundSize: full
    title: >-
      Olá, me chamo lucca, sou um desenvolvedor back-end iniciante, com
      conhecimento em java poo e spring.
    subtitle: >-
      Aqui você encontra em que venho trabalhando recentemente — Alguns projetos
      onde apliquei alguns conceitos básicos de programação orientada a objetos,
      além de alguns frameworks como as collections java e SpringBoot. Você pode
      me conhecer melhor na seção "Sobre", caso surja alguma dúvida ou outra
      questão entre em contato comigo!
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-36
          - pb-48
          - pl-4
          - pr-4
        alignItems: center
        justifyContent: center
        flexDirection: row-reverse
      title:
        textAlign: left
      subtitle:
        textAlign: left
      text:
        textAlign: left
      actions:
        justifyContent: flex-start
    type: HeroSection
    actions: []
  - colors: colors-f
    type: FeaturedProjectsSection
    elementId: ''
    actions:
      - type: Link
        label: Ver todos os projetos
        url: /projects
    showDate: false
    showDescription: true
    showFeaturedImage: true
    showReadMoreLink: true
    variant: variant-b
    projects:
      - content/pages/projects/project-two.md
      - content/pages/projects/project-three.md
      - content/pages/projects/project-one.md
    styles:
      self:
        height: auto
        width: wide
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pl-4
          - pr-4
        justifyContent: center
      title:
        textAlign: left
      subtitle:
        textAlign: left
      actions:
        justifyContent: flex-end
    subtitle: ''
    title: Projetos
  - type: ContactSection
    colors: colors-f
    backgroundSize: full
    title: "Tem um projeto interessante? Me fale mais sobre ele...\U0001F4AC"
    form:
      type: FormBlock
      elementId: sign-up-form
      fields:
        - name: firstName
          label: Nome
          hideLabel: true
          placeholder: Nome
          isRequired: true
          width: 1/2
          type: TextFormControl
        - name: lastName
          label: Último sobrenome
          hideLabel: true
          placeholder: Último sobrenome
          isRequired: false
          width: 1/2
          type: TextFormControl
        - name: email
          label: Email
          hideLabel: true
          placeholder: Email
          isRequired: true
          width: 1/2
          type: EmailFormControl
      submitLabel: "Enviar \U0001F680"
      styles:
        submitLabel:
          textAlign: center
    styles:
      self:
        height: auto
        width: narrow
        margin:
          - mt-0
          - mb-0
          - ml-0
          - mr-0
        padding:
          - pt-24
          - pb-24
          - pr-4
          - pl-4
        alignItems: center
        justifyContent: center
        flexDirection: row
      title:
        textAlign: left
      text:
        textAlign: left
backgroundImage:
  type: BackgroundImage
  url: /images/6cd72d0da6814f97b3f8a230afeedd8d.jpg
  backgroundSize: cover
  backgroundPosition: center
  backgroundRepeat: no-repeat
  opacity: 100
---
