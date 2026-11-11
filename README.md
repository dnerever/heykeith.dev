# heykeith.dev

Personal portfolio built with Astro and deployed as Cloudflare Workers static
assets.

## Local development

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`, then preview it with
`npm run preview`.

## Cloudflare deployment

The GitHub Actions workflow deploys on pushes to `main` and can also be started
manually. Add these repository secrets before enabling deployment:

- `CLOUDFLARE_API_TOKEN` — an API token with permission to deploy Workers.
- `CLOUDFLARE_ACCOUNT_ID` — the Cloudflare account ID.

The Worker is available on its `workers.dev` address with no custom domain
configuration. To serve `heykeith.dev`, add the domain as a custom domain for
the deployed Worker in Cloudflare. The domain must have an active Cloudflare
zone in the account. This repository does not modify DNS or perform a production
domain cutover.
