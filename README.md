# ASU Provider Extension for pi

This package registers ASU's OpenAI-compatible API as a pi provider.

## Install

```bash
pi install npm:@nvaughn/pi-asu-provider
```

## Notes

- Uses pi built-in API-key auth (`~/.pi/agent/auth.json` key: `asu`)
- Provides fallback model definitions so it appears in `/login`
- Uses `openai-completions` against `https://openai.rc.asu.edu/v1`
