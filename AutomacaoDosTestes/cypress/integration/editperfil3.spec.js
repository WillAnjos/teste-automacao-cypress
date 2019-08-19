describe("UI OF THE INSTAGRAM WEB EDIT AND VALIDATE TELEFONE PROFILE TEST", () => {
  beforeEach(() => {
    cy.visit("https://www.instagram.com/accounts/login/?hl=pt-br");
  });

  it("deve carregar a página, fazer login corretamente, clicar no botão para não ativar notificações, entrar em editar perfil, limpar e preencher o campo nome de usuário, limpar e preencher o campo email corretament e checar se sistema aceita salvar", () => {
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
    cy.get("#pepUsername").should("have.value", "willanjosteste");
    cy.get("#pepUsername").clear();
    cy.get("#pepUsername").type("willanjosteste", { delay: 100 });
    cy.get("#pepEmail").clear();
    cy.get("#pepEmail").type("willanjosaway@gmail.com", {
      delay: 100
    });
    cy.get("#pepEmail").should("have.value", "willanjosaway@gmail.com");
    cy.wait(2000);
    cy.get(".fi8zo > .L3NKy").click();
  });
});
