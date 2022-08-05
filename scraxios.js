class ScraxiosExtension {
    // Define information about the extension
    getInfo() {
      return {
        id: 'scraxios',
        name: 'Scraxios',
  
        blocks: [
          {
            opcode: 'makerequest',
            blockType: Scratch.BlockType.REPORTER,
            text: 'make a [get, post, put, delete] request to [url] with the body [body]',
          }
        ]
      };
    }
  
    makerequest() {

      return 'Hello, world!';
    }
  }
  
  // Call Scratch.extensions.register to register your extension
  // Make sure to register each extension exactly once
  Scratch.extensions.register(new ScraxiosExtension());