#  Nginx_Reverse_Proxy
This project demonstrates how to set up an Nginx reverse proxy to forward requests to a Node.js application.

## Forward Proxy vs Reverse Proxy

| Feature           | Forward Proxy                                                                 | Reverse Proxy                                                                 |
|-------------------|-------------------------------------------------------------------------------|-------------------------------------------------------------------------------|
| Purpose           | Used by clients to access servers indirectly                                  | Used by servers to handle requests from clients                               |
| Client Visibility | Clients are aware of the proxy                                                | Clients are unaware of the proxy                                              |
| Use Case          | Bypassing geo-restrictions, caching, anonymity                                | Load balancing, caching, SSL termination, security                            |
| Example           | A user accessing blocked content via a proxy server                           | Nginx forwarding requests to a Node.js application                            |
| Configuration     | Configured on the client side                                                 | Configured on the server side                                                 |

## Prerequisites

- Node.js installed
- Nginx installed

## Setup

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/nginx-reverse-proxy.git
    cd nginx-reverse-proxy
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the Node.js application:
    ```sh
    npm start
    ```

4. Configure Nginx:
    ```nginx
    server {
        listen 80;

        server_name yourdomain.com;

        location / {
            proxy_pass http://localhost:3000;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
    ```

5. Restart Nginx to apply the configuration:
    ```sh
    sudo systemctl restart nginx
    ```

## Testing

Open your browser and navigate to `http://yourdomain.com`. You should see your Node.js application running behind the Nginx reverse proxy.

