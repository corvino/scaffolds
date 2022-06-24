# Scaffolding or Boilerplate

A collection of new project templates created with [copier](https://copier.readthedocs.io/en/stable/).

### scaffold script

The scaffold script invokes copier on the specified template, deriving the template name variables from the using current working directory.

Future features that may be interesting/necessary are:

- Adding flags to override name and display_name
- Adding support for arbitrary key/value pairs

### Setup

To install dependencies.

    pip install -r requirements.txt

### Usage

Run in new project directoy

    # Use path to scaffold script and template to invoke
    ~/code/scaffolds/scaffold react-tailwind-vite

### Copier dependency issues

Copier depends on Jinja and MarkupSafe, which has [version compatibility issues](https://github.com/copier-org/copier/issues/574).
