FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Project-TH/just-nothing /root/just-nothing
WORKDIR /root/just-nothing/
ENV TZ=Asia/Colombo
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
