import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url:  "prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19JWHkwTDlNZjVoa1FnTm05UFI5dXAiLCJhcGlfa2V5IjoiMDFLTTA1UkoyQ05SR1RSMVY1UEZGNURNMzEiLCJ0ZW5hbnRfaWQiOiI2ODcxYTU2Y2YyYjUzYmU2MDZkMjViMzg5NzI4ODdkODdiYTM2YWY4NDQwN2I1NmI4MDVlZWNiMzMyMGUxOTU3IiwiaW50ZXJuYWxfc2VjcmV0IjoiOTdlZjFjMjItMjNlZC00OTk5LWIzNDMtMGU3NTg3MjU2MGZjIn0.yQYPpiM-qqUWgFe9KYd8wGUlgepuSyfRSEAlUlUq4JA"
  },
});
