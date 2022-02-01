FROM strapi/base

ENV HOST=0.0.0.0 \
    PORT=1337 \
    NODE_ENV=production \
    ADMIN_JWT_SECRET=661ee08a3f332be6c13cb238011a4c12 \
    DATABASE_HOST=127.0.0.1 \
    DATABASE_PORT=3306 \
    DATABASE_NAME=fm-db \
    DATABASE_USERNAME=root \
    DATABASE_PASSWORD=password \
    DATABASE_SSL=false \
    JWT_SECRET=396d1b9a-4750-4190-9110-01db054c8574 \
    API_TOKEN_SALT=bf35a05d7f9e05e605bdcde312876488 \
    AWS_ACCESS_KEY_ID=3eea1f97-f796-41f5-a6f5-2e23d0507870 \
    AWS_ACCESS_SECRET=68e7b36cd9d4d8bc39097ad53f3ad7f4846bc19306c4df38ea4d018bc913e4a4 \
    AWS_BUCKET=fms \
    AWS_API_VERSION=2006-03-01 \
    AWS_ENDPOINT=https://s3.ir-thr-at1.arvanstorage.com \
    SMTP_PASSWORD=xxxx324edcdesdfd \
    SMTP_USERNAME=test.test@gmail.com \
    SMTP_HOST=smtp.gmail.com \
    SMTP_PORT=465 \
    GHASEDAK_API_KEY=b3d0424863b949fcac2879aff74fd1257ae5f3f26ae89323c10322633e2fef99 \
    GHASEDAK_LINE_NUMBER=300002525

WORKDIR /app

COPY package.json .

COPY yarn.lock .

RUN yarn install

COPY . .

EXPOSE 1337

CMD ["yarn", "start"]