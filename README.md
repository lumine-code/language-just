# language-just

Just language support.

## Features

- **Grammars**: provides Tree-sitter grammars, built from [tree-sitter-just](https://github.com/IndianBoy42/tree-sitter-just).
- **Syntax highlighting**: recipes, dependencies, attributes, settings and interpolation.
- **Interpolation**: `{{ … }}` and backtick command substitution are scoped apart from ordinary text.
- **Folding**: folds recipe bodies.
- **Symbol navigation**: recipe names and assignments.

## Installation

To install `language-just` search for it in the Install pane of the Lumine settings, or run the command `lumine --install lumine-code/language-just`.

## Services

- `hyperlink.injection`: consumed to highlight URLs in these files as clickable links.
- `todo.injection`: consumed to highlight `TODO`-style markers inside comments.

## Contributing

Got ideas to make this package better, found a bug, or want to help add new features? Just drop your thoughts on GitHub. Any feedback is welcome!
