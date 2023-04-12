import cypress from "cypress";

describe("for Stub Testing for login", () => {
  beforeEach(() => {
    cy.intercept("POST", "https://apis.ccbp.in/login").as("users");
  });
  it("Api", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("#usernameId").type("rahul");
    cy.get("#passwordId").type("rahul@021");
    cy.get("#loginBtnId").click();
    cy.wait("@users");
    cy.get("#Error").should("have.text", "*username and password didn't match");
  });
});

describe("NxtWatch Representation", () => {
  it("Going through all the Route", () => {
    // expect(true).to.equal(true);
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1000);
    // cy.get("#HindiBtnId").click();
    cy.get("#usernameId").type("rahul");
    cy.get("#passwordId").type("rahul@2021");
    cy.get("#IsShowPasswordId").click();
    // cy.get("#EnglishBtnId").click();
    cy.get("#loginBtnId").click();

    cy.get("#DarkImgId").click();
    // cy.get("#LightImgId").click();

    // cy.get("#SideWithContent").scrollTo("center");
    cy.contains("Trending").click();
    cy.contains("Gaming").click();
    cy.contains("Saved videos").click();
    cy.contains("Home").click();

    cy.contains("Yellow Strikers").click();
    cy.get("#SavedVideosId").click();
    cy.contains("Saved videos").click();

    cy.contains("Logout").click();
    // cy.contains("Cancel").click();
    cy.contains("Confirm").click();
  });

  it("to change the language", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1200, 1000);
    // cy.get("#HindiBtnId").click();
    cy.get("#usernameId").type("rahul");
    cy.get("#passwordId").type("rahul@2021");
    cy.get("#IsShowPasswordId").click();
    // cy.get("#EnglishBtnId").click();
    cy.get("#loginBtnId").click();
    cy.get("#Language").select("हिंदी");
  });
});
