export HUB_APIKEY=SKIP
export SEC_ALERTS=SKIP
export SEC_UPDATES=FORCE
{{ inithooks_add | default(omit) }}
