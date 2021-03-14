FROM node:14.15.5

ENV NODE_ENV development

EXPOSE 19001 19002 19006

RUN npm install --silent -g expo-cli@latest

USER node
RUN mkdir /home/node/app
WORKDIR /home/node/app
ENV PATH /home/node/app/node_modules/.bin:$PATH

ENTRYPOINT [ "bash" ]