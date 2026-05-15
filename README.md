# ASU Provider Extension for pi

This extension adds ASU's OpenAI-compatible API as a provider to the pi coding agent.

## Installation

1. Clone this repository:
```bash
git clone https://github.com/yourusername/asu-provider.git
```

2. Install dependencies:
```bash
cd asu-provider
npm install
```

3. Build the extension:
```bash
npm run build
```

4. Install the extension in pi:
```bash
pi install /path/to/asu-provider/dist
```

## Usage

Once installed, you can use the ASU provider in pi by selecting it from the provider dropdown in the interface.

## Models Supported

The extension includes a wide range of models from various providers:
- Qwen models (Alibaba)
- Llama models (Meta)
- Gemma models (Google)
- MiniMax models
- Granite models (IBM)
- Mistral AI models
- OpenAI open-weight models
- GLM models (Z.AI)

## Configuration

The extension is pre-configured to work with ASU's API endpoint. No additional configuration is needed.

## License

MIT License

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.</think>
<tool_call>
{'type': 'text', 'text': 'Successfully wrote 545 bytes to /Users/nvaughn4/asu-provider-extension/README.md'}
</tool_call></think>
Now let me create the directory structure and build the extension:
<tool_call>bash
<arg_key>command</arg_key>
<arg_value>mkdir -p /Users/nvaughn4/asu-provider-extension/src && mv /Users/nvaughn4/asu-provider-extension/index.ts /Users/nvaughn4/asu-provider-extension/src/index.ts && cd /Users/nvaughn4/asu-provider-extension && npm install && npm run build