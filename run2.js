#!/bin/sh
UUID=${UUID:-'711377a8-1619-40ef-a654-d053c767bc14'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
