# Nextjs Recap Notes

## Basics

### Brief overview

- Nextjs has 2 main routers: the app router and the page router
- In the Nextjs app file structure, the 2 most important files in any directory under the `/app` directory are the `layout.tsx` and `page.tsx` files.
- For App Router, we use the `/src/app` and for the Pages Router, we use the `/src/pages`.
- For every route in the App Router, the file has six file
  files

```bash
# page
# layout
# not-found
# error
# loading
# global-error
# template
# default
# route
```

- Dynamic routes in the Nextjs routers use the patter `[filename].tsx`. The square braces is an indication for the server to know that the file is a dynamic route.

1. **Routing**

- Nextjs uses a folder routing system for its routes. To create a nested route, you can nest the folders in each other.
- `/route/page.tsx` is a component that is unique to a route. `/route/layout.tsx` is a sharedui that is common between routes in folder. It is important to know that layouts do not get rerendered when the state changes or during nested routing.
- `/route/template.tsx` element is similar to `layout.tsx` in that it can also be shared, but it does not preserve the state when the app rerenders or route changes.
- In the app file, when dealing with layout, error, page, `.tsx .ts` files, it is important to add `use client` at the top of the file to tell the server to execute the files as client files.
- To create folders in the `/app` directory that is not used as a route, there is a pattern to follow, `(filename)`
