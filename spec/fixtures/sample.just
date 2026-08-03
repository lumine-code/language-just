# Assertions live in the comments: `<- scope` checks the marker's own column
# on the previous non-comment line, `^ scope` checks the caret's. Scopes
# match by prefix, so the trailing `.just` segment is left off.

alias b := build
# <- keyword

build:
# <- entity.name.function

# a comment
# <- comment
