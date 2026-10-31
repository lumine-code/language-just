describe("just conservative indentation", () => {
  let editor;
  beforeEach(async () => {
    jasmine.useRealClock();
    await lumine.packages.activatePackage("language-just");
    editor = await lumine.workspace.open("justfile");
    editor.update({ autoIndent: true, tabLength: 2, softTabs: true });
  });
  afterEach(() => editor.destroy());
  async function newline(source) {
    editor.setText(source);
    await editor.whenGrammarSettled();
    editor.setCursorBufferPosition([0, Infinity]);
    await editor.insertNewline();
    return editor.lineTextForBufferRow(1);
  }
  it("does not guess indentation from an unfinished construct", async () => {
    expect(await newline("build:")).toBe("");
  });
  it("inherits manual indentation when continuing a line", async () => {
    expect(await newline("  echo value")).toBe("  ");
  });
  it("ignores structural-looking punctuation in comments", async () => {
    expect(await newline("# if ( {")).toBe("");
  });
});
