#!/bin/bash

mkdir -p ~/.ssh
curl -Ls https://github.com/renbaoshuo.keys >> ~/.ssh/authorized_keys
echo -e "\033[32mINFO\033[0m Successfully added SSH key: renbaoshuo"
curl -Ls https://github.com/BaoshuoBot.keys >> ~/.ssh/authorized_keys
echo -e "\033[32mINFO\033[0m Successfully added SSH key: BaoshuoBot"
sed -i 's/^#\?PasswordAuthentication yes/PasswordAuthentication no/' /etc/ssh/sshd_config
PasswordAuthentication=$(cat /etc/ssh/sshd_config | grep "PasswordAuthentication no" | awk '{print $2}')
echo -e "\033[32mINFO\033[0m Password authentication: ${PasswordAuthentication}"
systemctl restart sshd
echo -e "\033[32mINFO\033[0m Successfully restarted sshd.service"
