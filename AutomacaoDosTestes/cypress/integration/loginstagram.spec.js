describe("UI OF THE INSTAGRAM WEB LOGIN", () => {
  beforeEach(() => {
    cy.visit("https://www.instagram.com/accounts/login/?hl=pt-br");
  });

  it("deve carregar página e fazer login corretamente e aparecer uma janela com a mensagem Ativar notificações, com as opções Ativar ou Agora não", () => {
    cy.wait(2000);
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "willanjosaway@gmail.com",
      { delay: 100 }
    );
    cy.wait(2000);
    cy.get(":nth-child(3) > ._9GP1n > .f0n8F > ._2hvTZ").type("gambaesnow", {
      delay: 100
    });
    cy.wait(2000);
    cy.get(".HmktE > :nth-child(4)").click();
    cy.wait(2000);
  });
});
