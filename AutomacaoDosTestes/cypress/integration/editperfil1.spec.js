describe("UI OF THE INSTAGRAM WEB EDIT PROFILE TEST", () => {
  beforeEach(() => {
    cy.visit("https://www.instagram.com/accounts/login/?hl=pt-br");
  });

  it("deve carregar a página, fazer login corretamente, clicar no botão para não ativar notificações, entrar em editar perfil e validar se os campos: nome de usuário e email estão preenchidos como esperado", () => {
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
    cy.get("._0mzm- > .Igw0E").click();
    cy.wait(2000);
    cy.get(".HoLwm").click();
    cy.wait(2000);
    cy.get("a > .glyphsSpriteUser__outline__24__grey_9").click();
    cy.wait(2000);
    cy.get(".thEYr > ._0mzm-").click();
    cy.wait(2000);
    cy.get("#pepUsername").should("have.value", "willanjosteste");
    cy.wait(1000);
    cy.get("#pepEmail").should("have.value", "willanjosaway@gmail.com");
  });
});
