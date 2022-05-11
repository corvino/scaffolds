# Scaffolding or Boilerplate

A collection of new project templates created with [copier](https://copier.readthedocs.io/en/stable/).

### scaffold script

The scaffold script invokes copier on the specified copier template, using the working directory for the template name variables.

If usage is frequent, a wrapper script might be useful, such as [scaffold](https://github.com/corvino/tilde/blob/master/bin/scaffold).

Future features that may be interesting/necessary are:

- Adding flags to override name and display_name
- Adding support for arbitrary key/value pairs

### Setup

To install dependencies.

    pip install -r requirements.txt

### Copier dependency issues

Copier depends on Jinja and MarkupSafe, which has [version compatibility issues](https://github.com/copier-org/copier/issues/574).
