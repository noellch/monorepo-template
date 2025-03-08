FROM node:22-alpine AS builder
RUN npm install -g pnpm
WORKDIR /app
COPY pnpm-lock.yaml ./
COPY package.json ./
COPY pnpm-workspace.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:22-alpine AS runner
RUN npm install -g pnpm
WORKDIR /app
COPY --from=builder /app/packages/client/.next ./packages/client/.next
COPY --from=builder /app/packages/client/package.json ./packages/client/
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["pnpm", "start"]
