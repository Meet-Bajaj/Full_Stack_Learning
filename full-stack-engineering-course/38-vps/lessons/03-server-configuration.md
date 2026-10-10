# Lesson 3: Server Configuration

## Installing Essential Software
Once secured, install the software stack needed for your applications.

### Installing Docker
Docker is the standard way to deploy applications on a VPS. It encapsulates dependencies.
```bash
sudo apt update
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io docker-compose-plugin
sudo usermod -aG docker ${USER}
```

### Installing Nginx
Nginx will act as the reverse proxy, sitting in front of your Docker containers.
```bash
sudo apt install nginx
```

### Installing Node.js (Optional, if not using Docker)
Use NVM (Node Version Manager) to install Node.js.
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
source ~/.bashrc
nvm install 18
```
