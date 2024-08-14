FROM node:current

RUN apt update \
	&& apt install -y dos2unix \
	&& npm install --global nodemon forever vim less\
	&& mkdir -p /server \
	&& mkdir -p /scripts \
	&& mkdir -p /docker 


# # USER ENVIRONMENT
COPY [".bash_aliases", ".bash_prompt" ,".bash_extra","/root/"]

# USER root

COPY ["init_container.sh",".bashrc","/scripts/"]

WORKDIR /scripts
# # Windows compatibility
RUN dos2unix /scripts/init_container.sh \
	&&  dos2unix /scripts/.bashrc \
	&&  dos2unix /root/.bash_aliases \
	&&  dos2unix /root/.bash_prompt \
	&&  dos2unix /root/.bash_extra \
	&& chmod +x init_container.sh 

# # USER innovait

EXPOSE 80 443
WORKDIR /server

