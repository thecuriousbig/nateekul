# Stage 1 - Install Packages.
FROM node:14.15.1-alpine3.10 AS base
ENV NODE_ENV=development
# Set working directory and paste package*.json.
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
# CI and release builds should use "npm ci" or "yarn install --frozen-lockfile" to fully respect the lockfile.
# Local development may use "npm install" or "yarn install" for opportunistic package updates.
RUN yarn install --frozen-lockfile

# Stage 2 - Build Artifacts.
FROM base AS builder
ENV NODE_ENV=production
# Copy development packages installed from tester to builder.
COPY --from=base /usr/src/app /usr/src/app
COPY . /usr/src/app
RUN yarn run build && \
    yarn install --production --silent && \
    yarn cache clean

# Stage 3 - Production ready.
FROM node:14.15.1-alpine3.10 AS archiver
ENV NODE_ENV=development
# Set working directory
WORKDIR /usr/src/app
# Include only the release build and production packages.
COPY --from=builder /usr/src/app/node_modules node_modules
COPY --from=builder /usr/src/app/.next .next
CMD ["next", "start"]
