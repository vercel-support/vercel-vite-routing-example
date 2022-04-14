# Vercel/Vite Routing Example

This is a repository meant to illustrate a problem I'm having deploying vite applications on vercel. The problem is I can only get client side routing to work locally (vercel dev), or for deployments, but not both.

## To Reproduce

1. Clone this repository
1. Run `yarn install`
1. Run `vercel` and connect it to a vercel project
1. Run `vercel dev` to test locally – it should fail
1. Now move \_vercel.json and run `vercel dev` again – it should work
