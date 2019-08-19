describe("UI OF THE INSTAGRAM WEB EDIT AND VALIDATE EMAIL PROFILE TEST", () => {
  beforeEach(() => {
    cy.visit("https://www.instagram.com/accounts/login/?hl=pt-br");
  });

  it("deve carregar a página, fazer login corretamente, clicar no botão para não ativar notificações, entrar em editar perfil, limpar o campo email e validar se sistema aceita salvar com o campo email vazio", () => {
    cy.wait(4000);
    cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ").type(
      "willanjosaway@gmail.com",
      { delay: 100 }
    );
    cy.wait(2000);
    cy.get(":nth-child(3) > ._9GP1n > .f0n8F > ._2hvTZ").type("gambaesnow", {
      delay: 100
    });
    cy.wait(2000);
    cy.get("._0mzm- > .Igw0E").click();
    cy.wait(2000);
    cy.get(".HoLwm").click();
    cy.wait(2000);
    cy.get("a > .glyphsSpriteUser__outline__24__grey_9").click();
    cy.wait(2000);
    cy.get(".thEYr > ._0mzm-").click();
    cy.wait(2000);
    cy.get("#pepEmail").clear();
    cy.wait(2000);
    cy.get(".fi8zo > .L3NKy").click();
  });
});
