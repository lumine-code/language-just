describe("Just editing settings", () => {
  let editor;
  beforeEach(async () => {
    await lumine.packages.activatePackage("language-just");
    editor = await lumine.workspace.open("justfile");
  });
  afterEach(() => editor.destroy());

  it("keeps a hyphenated recipe name intact during word selection", async () => {
    editor.setText("build-all:\n  echo done\n");
    await editor.whenGrammarSettled();
    editor.setCursorBufferPosition([0, 7]);
    expect(editor.getWordUnderCursor()).toBe("build-all");
  });
});
