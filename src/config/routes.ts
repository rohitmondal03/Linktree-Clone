import { createNavigationConfig } from "next-safe-navigation";


export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig(
  (defineRoute) => ({
    homeRoute: defineRoute('/'),
    signinRoute: defineRoute("/signin"),
    accountRoute: defineRoute("/account"),
    billingRoute: defineRoute("/account/billing"),
  }),
);


// customers: defineRoute('/customers', {
//   search: z
//     .object({
//       query: z.string().default(''),
//       page: z.coerce.number().default(1),
//     })
//     .default({ query: '', page: 1 }),
// }),
// invoice: defineRoute('/invoices/[invoiceId]', {
//   params: z.object({
//     invoiceId: z.string(),
//   }),
// }),
