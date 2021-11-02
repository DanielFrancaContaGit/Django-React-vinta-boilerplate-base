web: gunicorn template.wsgi --chdir backend --limit-request-line 8188 --log-file -
worker: REMAP_SIGTERM=SIGQUIT celery --workdir backend --app=template worker --loglevel=info
beat: REMAP_SIGTERM=SIGQUIT celery --workdir backend --app=template beat -S redbeat.RedBeatScheduler --loglevel=info
