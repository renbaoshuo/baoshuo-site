#!/bin/bash

mkdir -p ~/.ssh
curl -Ls https://github.com/renbaoshuo.keys >> ~/.ssh/authorized_keys
echo -e "\033[32mINFO\033[0m Successfully added SSH key: renbaoshuo"
curl -Ls https://github.com/BaoshuoBot.keys >> ~/.ssh/authorized_keys
echo -e "\033[32mINFO\033[0m Successfully added SSH key: BaoshuoBot"
sed -i 's/^#\?PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
SSH_USER=$(id -u -n)
chown -R $SSH_USER:$SSH_USER ~/.ssh/authorized_keys
echo -e "\033\32mINFO\033[0m Changed the owner of ~/.ssh/authorized_keys to ${SSH_USER}"
chmod 600 ~/.ssh/authorized_keys
echo -e "\033[32mINFO\033[0m Set the mode of ~/.ssh/authorized_keys to 600"
PasswordAuthentication=$(cat /etc/ssh/sshd_config | grep "PasswordAuthentication no" | awk '{print $2}')
echo -e "\033[32mINFO\033[0m Password authentication: ${PasswordAuthentication}"
systemctl restart sshd
echo -e "\033[32mINFO\033[0m Successfully restarted sshd.service"

