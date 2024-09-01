# PNPM Experimentation

```shell
# https://pnpm.io/installation
corepack enable pnpm
corepack use pnpm@latest
```

Env variables impacting where pnpm stores information:

- `XDG_CACHE_HOME`
- `XDG_CONFIG_HOME`
- `XDG_DATA_HOME`
- `XDG_STATE_HOME`

`.npmrc` file locations:

- per-project `/path/to/my/project/.npmrc`
- per-workspace (dir that contains `pnpm-workspace.yaml`)
- per-user `~/.npmrc`
- global `/etc/npmrc`

Values in `.npmrc` files may contain env variables using the `${NAME}`, `${NAME-fallback}` (missing) or `${NAME:-fallback}` (missing or empty)

## Goals to show:

- [ ] Sites, packages, tools living in one repository.
- [ ] What happens when we publish.
  - [ ] Can we version and ship to github packages.
  - [ ] Can we use changesets.
- [ ] What happens in CI.
  - [ ] Can we limit checks to changed packages.
  - [ ] Can we publish packages.
- [ ] What happens for local dev.
  - [ ] Hosting the site.
  - [ ] Running from within docker.
- [ ] How would tooling configuration work.
  - [ ] TypeScript.
  - [ ] Eslint.
  - [ ] Jest.

## Misc:

- Changesets needs "Allow GitHub Actions to create and approve pull requests"
