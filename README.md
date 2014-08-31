ydm-api
---

Frontend to [ydm](https://github.com/keyvanfatehi/ydm) (yet another docker manager)

## Routes

### POST /drops/:name

Create or replace a drop

Body should contain a JavaScript drop definition

### POST /drops/:name/:action

Perform an action against a drop

e.g. an API request like `POST /drops/gitlab/install` is equivalent to the CLI command `ydm install gitlab`

## Install

Requires Docker v1.1.1

Requires [ydm](https://github.com/keyvanfatehi/ydm)

Clone it.

## Usage

`node server.js`

## Security

Set env var YDM_API_SECRET to require all requests to include header X-Auth-Token with that string. Use SSL

## Example Supervisor Config

```
[program:ydm-api]
command=/home/keyvan/src/ydm-api/server.js
directory=/home/keyvan
stdout_logfile=/var/log/supervisor/%(program_name)s.log
redirect_stderr=true
autorestart=true
user=keyvan
environment=YDM_API_SECRET=secret,DOCKER_HOST=tcp://127.0.0.1:4243,YDM_API_DROPS=/home/keyvan/.ydm-api/drops,YDM_HOME=/home/keyvan/.ydm-api
```
