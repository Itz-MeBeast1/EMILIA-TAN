FROM Itz-MeBeast1/EMILIA-TAN:test

RUN git clone https://github.com/Itz-MeBeast1/EMILIA-TAN/ /skl/EMILIA-TAN
WORKDIR /skl/EMILIA-TAN 
ENV TZ = Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "EMILIA-TAN.js"]
